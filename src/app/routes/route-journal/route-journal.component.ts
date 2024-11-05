import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { ComposantAffichageCompetenceComponent } from '../../composants/composant-affichagecompetence/composant-affichagecompetence.component';
import { DialogSelectionCompetenceComponent } from '../../composants/dialogue-selectioncompetence/dialog-selectioncompetence.component';
import { AbstractComponent } from '../../directives/abstract.component';
import { Eleve } from '../../model/eleve-model';
import { GroupeSurUnTemps, Journal } from '../../model/journal-model';
import { ModelUtil } from '../../model/model-utils';
import { HtmlPipe } from '../../pipes/html.pipe';
import { ContexteService } from '../../service/contexte-service';
import { JournalService } from '../../service/journal-service';
import { RouteEleveComponent } from '../route-eleve/route-eleve.component';
import { DialogDuplicationComponent } from './dialogue-duplication/dialog-duplication.component';

@Component({
    selector: 'route-journal', templateUrl: './route-journal.component.html', styleUrl: './route-journal.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // FontAwesome
        FontAwesomeModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatChipsModule, MatSelectModule, MatDatepickerModule, MatDialogModule,
        // Pour l'éditeur WYSIWYG
        HttpClientModule, AngularEditorModule,
        // Pipes
        HtmlPipe,
        // Composant applicatif
        ComposantAffichageCompetenceComponent, DialogSelectionCompetenceComponent
    ]
})
export class RouteJournalComponent extends AbstractComponent implements OnInit {

    /** Configuration de l'éditeur */
    public configurationWysiwyg: AngularEditorConfig = RouteEleveComponent.CONFIGURATION_WYSIWYG_PAR_DEFAUT;

    /** Date du journal saisie dans le filtre. */
    public dateJournal: Date | undefined;
    /** Journal en cours d'édition. */
    public journal: Journal | undefined;
    /** Liste des journaux chargée. */
    public journaux: Journal[] | undefined;

    /** Index du temps en cours d'édition. */
    public tempsEnEdition: number | undefined;
    /** Flag pour les remarques  en cours d'édition. */
    public remarqueEnEdition: boolean = false;
    /** Liste des statuts d'affichage du contenu de chaque temps. */
    public statutsAffichage: boolean[] = [];

    /** Données de référence : liste des heures pour la sélection de l'heure de début et de fin des temps. */
    public tempsDisponibles: string[] = ModelUtil.creerListeHoraires();
    /** Donnees de référence : liste des élèves. */
    public eleves: Eleve[] = []
    /** Donnees de référence : Map des raisons d'absence. */
    private mapRaisonAbsence: { [key: string]: string } | undefined;

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService, private activatedRoute: ActivatedRoute, private router: Router, private location: Location, private journalService: JournalService, private dialog: MatDialog) {
        super();
    }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // Récupération du paramètre de date depuis l'URL
        const timeEnParametreUrl = this.activatedRoute.snapshot.queryParams['time'];

        // Initialisation de la date du journal + déclenchement de la sélection du journal
        this.dateJournal = new Date();
        if (timeEnParametreUrl) {
            this.dateJournal.setTime(timeEnParametreUrl);
        }
        this.dateJournal.setHours(0, 0, 0, 0);
        this.onChangementDateJournal();

        // Au chargement des données,
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                // Copie des données nécessaires
                this.journaux = donnees?.journal;
                this.eleves = donnees?.eleves || [];
                this.mapRaisonAbsence = donnees?.mapRaisonAbsence;

                //  déclenchement de la sélection du journal
                this.onChangementDateJournal();
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Ajout d'un nouveau groupe dans le temps pointé avec les élèves non sélectionnés dans les autres groupes du temps. */
    public ajouterGroupe(i: number): void {
        this.journalService.ajouterGroupe(this.journal, this.eleves, i);
    }

    /** Ajout ou retrait d'un élève à un temps */
    public ajouterRetirerEleveAuGroupeDunTemps(t: number, g: number, idEleve: string): void {
        this.journalService.ajouterRetirerEleveAuGroupeDunTemps(this.journal, t, g, idEleve);
    }

    /** Ajout d'un temps d'un type précis après le temps passé en index */
    public ajouterTempsApres(i: number, type: string): void {
        if (this.journalService.ajouterTempsApres(this.journal, i, type)) {

            // Retrait du boolean comme du temps
            this.statutsAffichage.splice(i + 1, 0, true);

            // Si édition en cours, le nouveau temps passe en édition
            this.tempsEnEdition = i + 1;
        }
    }

    /** Déplacement de la date du journal d'un nombre 'delta' de jours */
    public changerDate(delta: number) {
        if (this.dateJournal) {
            const nouvelleDate = new Date();
            // delta x 24h + 1h => le +1h est pour le jour du changement d'heure
            nouvelleDate.setTime(this.dateJournal.getTime() + (delta * 1000 * 3600 * 24) + 3600000);
            nouvelleDate.setHours(0, 0, 0, 0);
            this.dateJournal = nouvelleDate;
            this.onChangementDateJournal();
        }
    }

    /** Création d'un journal pour la date sélectionnée */
    public creerJournal(): void {
        if (this.journaux && this.dateJournal && !this.journal) {

            // création du journal
            this.journal = this.journalService.rechercherOuCreerJournal(this.journaux, this.dateJournal, this.eleves, this.mapRaisonAbsence);

            // en mode édition par défaut
            this.tempsEnEdition = 0;
            this.remarqueEnEdition = true;
        }
    }

    /** Ajout d'une compétence via le composant dédié dans un dialog. */
    public demanderAjoutCompetence(groupe: GroupeSurUnTemps): void {

        // Ouverture du dialog avec le composant de sélection de compétence
        const dialog = this.dialog.open(DialogSelectionCompetenceComponent, { minHeight: 600, minWidth: 1000 });

        // A la fermeture, ajout de la compétence (si sélectionnée)
        dialog.afterClosed().subscribe(competence => {
            if (competence !== undefined) {
                if (!groupe.competences) {
                    groupe.competences = [];
                }
                groupe.competences.push(competence.id);
            }
        });
    }

    /** Dupliquer le journal sélectionné ou le temps passé en paramètre à une autre date. */
    public demanderDuplicationJournal(): void {
        const dialog = this.dialog.open(DialogDuplicationComponent, { minHeight: 600, minWidth: 1000 }).componentInstance;
        dialog.journaux = this.journaux;
        dialog.eleves = this.eleves;
        dialog.mapRaisonAbsence = this.mapRaisonAbsence;
        dialog.journal = this.journal;
        dialog.dateCible = this.journal?.date;
    }

    /** Dupliquer le journal sélectionné ou le temps passé en paramètre à une autre date. */
    public demanderDuplicationTemps(indexTemps: number): void {
        if (indexTemps > -1 && this.journal && this.journal.temps && indexTemps < this.journal.temps.length) {
            const dialog = this.dialog.open(DialogDuplicationComponent, { minHeight: 600, minWidth: 1000 }).componentInstance;
            dialog.journaux = this.journaux;
            dialog.temps = this.journal.temps[indexTemps];
            dialog.dateCible = this.journal?.date;
        }
    }

    /** Déplacer un temps dans le journal */
    public descendreTemps(i: number): void {
        if (this.journalService.descendreTemps(this.journal, i)) {

            // Déplacement du flag d'affichage
            const affichage = this.statutsAffichage[i];
            this.statutsAffichage[i] = this.statutsAffichage[i + 1]
            this.statutsAffichage[i + 1] = affichage;

            // Déplacement du temps en édition
            if (this.journal && this.tempsEnEdition == i && i < this.journal.temps.length - 1) {
                this.tempsEnEdition = i + 1;
            }
        }
    }

    /** Passer en mode EDITION. */
    public editerTemps(i: number): void {
        this.tempsEnEdition = i;
    }

    /** Déplacer un temps dans le journal. */
    public monterTemps(i: number): void {
        if (this.journalService.monterTemps(this.journal, i)) {

            // Déplacement du flag d'affichage
            const affichage = this.statutsAffichage[i];
            this.statutsAffichage[i] = this.statutsAffichage[i - 1]
            this.statutsAffichage[i - 1] = affichage;

            // Déplacement du temps en édition
            if (this.tempsEnEdition == i && i > 0) {
                this.tempsEnEdition = i - 1;
            }
        }
    }

    /** Au changement de date, on recherche le journal. */
    public onChangementDateJournal(): void {
        if (this.journaux && this.dateJournal) {
            // Recherche du journal
            this.journal = this.journalService.rechercherJournal(this.journaux, this.dateJournal);
            this.statutsAffichage = [];
            if (this.journal && this.journal.temps) {
                this.statutsAffichage = this.journal.temps.map(t => false);
            }

            // MaJ de l'URL avec la date
            const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { time: this.dateJournal.getTime() } }).toString();
            this.location.go(url);
        }
    }

    /** Pour valider un temps directement via un CRTL+ENTRER */
    public onKeyUpSurTempsDeJournal(event: KeyboardEvent): void {
        if (!!event.ctrlKey && event.key == "Enter") {
            this.validerTemps();
        }
    }

    /** Pour valider les remarques directement via un CRTL+ENTRER */
    public onKeyUpSurRemarqueDeJournal(event: KeyboardEvent): void {
        if (!!event.ctrlKey && event.key == "Enter") {
            this.remarqueEnEdition = false;
        }
    }

    /** Suppression d'une compétence. */
    public supprimerCompetence(groupe: GroupeSurUnTemps, idCompetence: string): void {
        if (groupe && idCompetence) {
            const index = groupe.competences.indexOf(idCompetence);
            groupe.competences.splice(index, 1);
        }
    }

    /** Suppression du groupe dans le temps */
    public supprimerGroupe(t: number, g: number): void {
        this.journalService.supprimerGroupe(this.journal, t, g);
    }

    /** Suppression du journal */
    public supprimerJournal(): void {
        if (this.journalService.supprimerJournal(this.journal, this.journaux)) {
            // Ménage dans les flags et données du composant
            this.journal = undefined;
            this.tempsEnEdition = undefined;
            this.remarqueEnEdition = false;
        }
    }

    /** Supprimer un temps */
    public supprimerTemps(i: number): void {
        if (this.journalService.supprimerTemps(this.journal, i)) {
            this.statutsAffichage.splice(i, 1);
        }
    }

    /** Sortir du mode EDITION */
    public validerTemps(): void {
        this.tempsEnEdition = undefined;
    }
}