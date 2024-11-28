import { CommonModule, Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { ROUTE_PROJET } from '../../app.routes';
import { ComposantAffichageCompetenceComponent } from '../../composants/composant-affichagecompetence/composant-affichagecompetence.component';
import { DialogSelectionCompetenceComponent } from '../../composants/dialogue-selectioncompetence/dialog-selectioncompetence.component';
import { Eleve } from '../../model/eleve-model';
import { Periode } from '../../model/model';
import { Competence } from '../../model/note-model';
import { Projet, SousProjetParPeriode } from '../../model/projet-model';
import { HtmlPipe } from '../../pipes/html.pipe';
import { ContexteService } from '../../service/contexte-service';
import { ProjetService } from '../../service/projet-service';
import { AbstractRoute } from '../route';
import { RouteEleveComponent } from '../route-eleve/route-eleve.component';
import { DialogSuppressionCompetenceComponent } from './dialogue-suppression/dialog-suppressioncompetence.component';

@Component({
    selector: 'route-projet', templateUrl: './route-projet.component.html', styleUrl: './route-projet.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatChipsModule, MatSelectModule, MatCheckboxModule,
        // FontAwesome
        FontAwesomeModule,
        // Pour l'éditeur WYSIWYG
        HttpClientModule, AngularEditorModule,
        // Pipes
        HtmlPipe,
        // Composant applicatif
        ComposantAffichageCompetenceComponent, DialogSelectionCompetenceComponent
    ]
})
export class RouteProjetComponent extends AbstractRoute {

    /** Configuration de l'éditeur */
    public configurationWysiwyg: AngularEditorConfig = RouteEleveComponent.CONFIGURATION_WYSIWYG_PAR_DEFAUT;

    /** Référentiel des projets. */
    public projets: Projet[] | undefined;
    /** Référentiel des périodes. */
    public periodes: Periode[] | undefined;
    /** Référentiel des élèves. */
    public eleves: Eleve[] | undefined;
    /** Référentiel des compétences. */
    public competences: Competence[] | undefined;

    /** Projet sélectionné */
    public projetSelectionne: Projet | undefined;
    /** Flag du mode édition. */
    public modeEdition: boolean = false;

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private projetService: ProjetService, private contexteService: ContexteService, private activatedRoute: ActivatedRoute, private location: Location, private dialog: MatDialog) {
        super(router);
    }

    /** @see classe parente */
    public afficherRaffraichirDonnees(): void {

        // Tri des lignes par date de début de la période
        this.projetService.trierLignes(this.projetSelectionne, this.periodes);

        // MaJ de l'URL avec le bon ID d'élève
        const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { id: this.projetSelectionne?.id } }).toString();
        this.location.go(url);
    }

    /** @see classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_PROJET;
    }

    /** Ajout ou retrait d'un élève à un temps */
    public ajouterRetirerEleveAuProjet(idEleve: string): void {
        if (this.eleves && this.projetSelectionne && this.projetSelectionne.sousProjetParPeriode) {

            // Ajout de l'élève
            if (!this.projetSelectionne.idsEleve?.includes(idEleve)) {
                this.projetService.ajouterEleveAuProjet(this.projetSelectionne, idEleve, this.eleves);
            }

            // Retrait de l'élève
            else {

                // Recherche des sousProjet dont une des compétences est référencée dans les notes de l'élève
                const pbsTrouves: string[] = [];
                this.projetSelectionne.sousProjetParPeriode.forEach(ssProjet => {
                    const periode = this.periodes?.find(p => p.id === ssProjet.idPeriode);
                    if (this.eleves && this.competences && periode && this.projetSelectionne && ssProjet.idCompetences) {
                        pbsTrouves.push(...this.projetService.rechercherProblemesPourRetirerCompetenceOuEleveAUnProjet(
                            { eleves: this.eleves, projet: this.projetSelectionne, competences: this.competences },
                            [idEleve], periode, ssProjet.idCompetences));
                    }
                });

                // En cas de problème, popup et suppression que si la confirmation est obtenue
                if (pbsTrouves.length > 0) {

                    // Ouverture du dialog avec le composant de sélection de compétence
                    const dialog = this.dialog.open(DialogSuppressionCompetenceComponent, { minHeight: 600, minWidth: 1000 });
                    dialog.componentInstance.problemes = pbsTrouves;
                }

                // Sinon, retrait de l'élève du projet
                else {
                    this.projetService.retirerEleveAuProjet(this.projetSelectionne, idEleve, this.eleves);
                }
            }
        }
    }

    /** Ajout d'un projet */
    public ajouterUnProjet(): void {
        // Création du projet
        const nouveauProjet = this.projetService.ajouterUnProjet(this.projets);

        // Sélection du projet
        this.onSelectionProjet(nouveauProjet);

        // Passage systématique en édition
        this.modeEdition = true;
    }

    /** Ajout d'un sous-projet */
    public ajouterUnSousProjet(): void {
        this.projetService.ajouterUnSousProjet(this.projetSelectionne);
    }

    /** Ajout d'une compétence dans le sous-projet */
    public demanderAjoutCompetence(sousProjet: SousProjetParPeriode): void {

        // Ouverture du dialog avec le composant de sélection de compétence
        const dialog = this.dialog.open(DialogSelectionCompetenceComponent, { minHeight: 600, minWidth: 1000 });

        // A la fermeture, ajout de la compétence (si sélectionnée)
        dialog.afterClosed().subscribe(competence => {
            if (this.projetSelectionne && this.eleves) {
                this.projetService.ajouterCompetence(sousProjet, competence.id, this.projetSelectionne, this.eleves);
            }
        });
    }

    /** @see classe parente */
    public initialiserRoute(): void {
        // Au chargement des données, récupéation des données
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {

                // Données à manipuler
                this.projets = donnees?.projets;

                // Données de reférence
                this.periodes = donnees?.periodes;
                this.eleves = donnees?.eleves;
                this.competences = donnees?.competences;

                // Sélection d'un projet si un paramètre est présent
                const idProjetSelectionne = this.activatedRoute.snapshot.queryParams['id'];
                if (idProjetSelectionne) {
                    const projet = this.projets?.find(p => p.id === idProjetSelectionne);
                    if (projet) {
                        this.onSelectionProjet(projet);
                    }
                }

                // Tri des périodes
                this.periodes?.sort((p1, p2) => (p1.debut && p2.debut) ? p1.debut.getTime() - p2.debut.getTime() : -1);
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Pour obtenir le libellé d'une période */
    public obtenirLibellePeriode(idPeriode: string | undefined): string | undefined {
        return this.periodes?.find(p => p.id == idPeriode)?.nom;
    }

    /** Au clic sur un projet, on le sélectionne/désélectionne */
    public onSelectionProjet(projet: Projet): void {
        // Si l'élève cliqué est déjà sélectionné, on vide l'élève sélectionné
        if (this.projetSelectionne && this.projetSelectionne === projet) {
            this.projetSelectionne = undefined;
        }
        // Sinon on sélectionne l'élève
        else {
            this.projetSelectionne = projet;
        }

        // Refresh des données
        this.afficherRaffraichirDonnees();
    }

    /** Pour valider le formulaire via un CRTL+ENTRER */
    protected passerEnModeLecture(): void {
        this.modeEdition = false;
    }

    /** Suppression de la compétence dans le sous-projet */
    public supprimerCompetence(sousProjet: SousProjetParPeriode, idCompetence: string): void {
        if (this.projetSelectionne && this.eleves && sousProjet.idPeriode) {

            // Recherche des sousProjet dont une des compétences est référencée dans les notes de l'élève
            const pbsTrouves: string[] = [];
            const periode = this.periodes?.find(p => p.id === sousProjet.idPeriode);
            if (this.eleves && this.competences && periode && this.projetSelectionne && this.projetSelectionne.idsEleve && sousProjet.idCompetences) {
                pbsTrouves.push(...this.projetService.rechercherProblemesPourRetirerCompetenceOuEleveAUnProjet(
                    { eleves: this.eleves, projet: this.projetSelectionne, competences: this.competences },
                    this.projetSelectionne.idsEleve, periode, [idCompetence]));
            }

            // En cas de problème, popup et suppression que si la confirmation est obtenue
            if (pbsTrouves.length > 0) {

                // Ouverture du dialog avec le composant de sélection de compétence
                const dialog = this.dialog.open(DialogSuppressionCompetenceComponent, { minHeight: 600, minWidth: 1000 });
                dialog.componentInstance.problemes = pbsTrouves;
            }

            // Sinon
            else {
                // Supprimer la compétence
                this.projetService.supprimerCompetence(sousProjet, idCompetence, this.projetSelectionne, this.eleves);
            }
        }
    }

    /** Suppression du projet sélectionné. */
    public supprimerProjetSelectionne(): void {
        if (this.projetSelectionne && this.projetSelectionne.sousProjetParPeriode && this.eleves) {

            // Recherche des sousProjet dont une des compétences est référencée dans les notes de l'élève
            const pbsTrouves: string[] = [];
            this.projetSelectionne.sousProjetParPeriode.forEach(sousProjet => {
                const periode = this.periodes?.find(p => p.id === sousProjet.idPeriode);
                if (this.eleves && this.competences && periode && this.projetSelectionne && this.projetSelectionne.idsEleve && sousProjet.idCompetences) {
                    pbsTrouves.push(...this.projetService.rechercherProblemesPourRetirerCompetenceOuEleveAUnProjet(
                        { eleves: this.eleves, projet: this.projetSelectionne, competences: this.competences },
                        this.projetSelectionne.idsEleve, periode, sousProjet.idCompetences));
                }
            });

            // En cas de problème, popup et suppression que si la confirmation est obtenue
            if (pbsTrouves.length > 0) {

                // Ouverture du dialog avec le composant de sélection de compétence
                const dialog = this.dialog.open(DialogSuppressionCompetenceComponent, { minHeight: 600, minWidth: 1000 });
                dialog.componentInstance.problemes = pbsTrouves;
            }

            // Sinon
            else {
                // Supprimer le projet
                if (this.projetService.supprimerProjetSelectionne(this.projetSelectionne, this.projets, this.eleves)) {

                    // Désélection du projet
                    this.projetSelectionne = undefined;

                    // Fin de l'édition
                    this.modeEdition = false;
                }
            }
        }
    }
}
