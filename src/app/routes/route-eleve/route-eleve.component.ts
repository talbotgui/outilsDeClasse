import { CommonModule, Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { AbstractComponent } from '../../directives/abstract.component';
import { Eleve } from '../../model/eleve-model';
import { ModelUtil } from '../../model/model-utils';
import { HtmlPipe } from '../../pipes/html.pipe';
import { ContexteService } from '../../service/contexte-service';
import { EleveService } from '../../service/eleve-service';


@Component({
    selector: 'route-eleve', templateUrl: './route-eleve.component.html', styleUrl: './route-eleve.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatChipsModule, MatSelectModule, MatDatepickerModule,
        // FontAwesome
        FontAwesomeModule,
        // Pour l'éditeur WYSIWYG
        HttpClientModule, AngularEditorModule,
        // Pipes
        HtmlPipe
    ]
})
export class RouteEleveComponent extends AbstractComponent implements OnInit {

    /** Configuration de l'éditeur commune pour toute l'application*/
    public static readonly CONFIGURATION_WYSIWYG_PAR_DEFAUT: AngularEditorConfig = {
        defaultFontSize: '3',
        height: 'auto',
        minHeight: '100px',
        editable: true,
        defaultFontName: 'Arial',
        toolbarHiddenButtons: [
            ['subscript', 'superscript', 'strikeThrough'],
            ['justifyFull', 'justifyRight', 'justifyCenter', 'justifyLeft'],
            ['heading', 'fontName', 'backgroundColor', 'fontSize'],
            ['link', 'unlink', 'insertImage', 'insertVideo'],
            ['removeFormat', 'toggleEditorMode']
        ]
    }

    /** Configuration de l'éditeur */
    public configurationWysiwyg: AngularEditorConfig = RouteEleveComponent.CONFIGURATION_WYSIWYG_PAR_DEFAUT;

    /** Liste des élèves extraite des données de la classe */
    public eleves: Eleve[] | undefined;
    /** Elève sélectionné */
    public eleveSelectionne: Eleve | undefined;
    /** Flag du mode édition. */
    public modeEdition: boolean = false;

    /** Référentiel - Liste des statuts d'élève pour la liste déroulante */
    public mapLibelleStatutEleve: { [key: string]: string } = {};
    /** Référentiel - Liste des types de contact pour la liste déroulante */
    public mapTypeContact: { [key: string]: string } = {};
    /** Référentiel - Liste des raisons d'absence pour la liste déroulante */
    public mapRaisonAbsence: { [key: string]: string } = {};
    /** Référentiel - Fréquences disponibles pour une absence. */
    public mapFrequenceAbsence = { '0': 'Semaine paire', '1': 'Semaine impaire', '2': 'Chaque semaine' };
    /** Référentiel - Liste des heures pour la sélection de l'heure de début et de fin des temps*/
    public tempsDisponibles: string[] = ModelUtil.creerListeHoraires();
    /** Référentiel - Liste des jours de la semaine*/
    public joursDeLaSemaine: Map<number, string> = ModelUtil.creerMapJoursDeLaSemaine();

    /** Constructeur pour injection des dépendances. */
    public constructor(private eleveService: EleveService, private contexteService: ContexteService, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { super(); }

    /** Au chargement du composant */
    public ngOnInit(): void {
        // Au chargement des données, 
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                //récupéation des données
                this.eleves = donnees?.eleves;
                this.mapLibelleStatutEleve = donnees?.mapLibelleStatutEleve || {};
                this.mapTypeContact = donnees?.mapTypeContact || {};
                this.mapRaisonAbsence = donnees?.mapRaisonAbsence || {};

                // Sélection de l'élève dont l'ID est en paramètre
                const idEleveSelectionne = this.activatedRoute.snapshot.queryParams['id'];
                if (idEleveSelectionne) {
                    this.eleveSelectionne = this.eleves?.find(e => e.id === idEleveSelectionne);
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Ajout d'un contact à la liste des contacts de l'élève sélectionné */
    public ajouterUnContact(): void {
        this.eleveService.ajouterUnContact(this.eleveSelectionne);
    }

    /** Ajouter une ligne de cursus */
    public ajouterCursus(): void {
        this.eleveService.ajouterCursus(this.eleveSelectionne);
    }

    /** Ajout d'une absence  à la liste des absences de l'élève sélectionné */
    public ajouterUneAbsence(): void {
        this.eleveService.ajouterUneAbsence(this.eleveSelectionne);
    }

    /** Ajout d'un élève et sélection automatique. */
    public ajouterUnEleve(): void {
        this.eleveService.ajouterUnEleve(this.eleves);
    }

    /** Obtenir libellé d'une fréquence */
    public obtenirLibelleFrequence(clefFrequence: number | undefined): string | undefined {
        if (typeof clefFrequence !== 'undefined') {
            return (this.mapFrequenceAbsence as any)[clefFrequence];
        } else {
            return '';
        }
    }

    /** Pour valider le formulaire via un CRTL+ENTRER */
    public onKeyUpSurFicheEleve(event: KeyboardEvent): void {
        if (!!event.ctrlKey && event.key == "Enter") {
            this.modeEdition = false;
        }
    }

    /** Au clic sur un élève, on le sélectionne/désélectionne */
    public onSelectionEleve(eleve: Eleve): void {
        // Si l'élève cliqué est déjà sélectionné, on vide l'élève sélectionné
        if (this.eleveSelectionne && this.eleveSelectionne === eleve) {
            this.eleveSelectionne = undefined;
        }
        // Sinon on sélectionne l'élève
        else {
            this.eleveSelectionne = eleve;
        }

        // MaJ de l'URL avec le bon ID d'élève
        const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { id: this.eleveSelectionne?.id } }).toString();
        this.location.go(url);
    }

    /** Retrait du contact de la liste. */
    public supprimerContact(noContact: number): void {
        this.eleveService.supprimerContact(this.eleveSelectionne, noContact);
    }

    /** Retrait de l'absence de la liste. */
    public supprimerAbsence(noAbsence: number): void {
        this.eleveService.supprimerAbsence(this.eleveSelectionne, noAbsence);
    }

    /** Retrait du cursus de la liste. */
    public supprimerCursus(noCursus: number): void {
        this.eleveService.supprimerCursus(this.eleveSelectionne, noCursus);
    }

    /** Suppression de l'élève sélectionné */
    public supprimerEleveSelectionne(): void {
        this.eleveService.supprimerEleveSelectionne(this.eleveSelectionne, this.eleves);
        this.eleveSelectionne = undefined;
    }
}
