import { ClipboardModule } from '@angular/cdk/clipboard';
import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { map, Observable, tap } from 'rxjs';
import { AbstractComponent } from '../../directives/abstract.component';
import { OptionCompetence } from '../../model/arbre-model';
import { Competence } from '../../model/note-model';
import { ContexteService } from '../../service/contexte-service';

@Component({
    selector: '[composant-selectioncompetence]', templateUrl: './composant-selectioncompetence.component.html',
    standalone: true, imports: [
        // Pour les composants Material
        MatButtonModule, MatTooltipModule, MatSelectModule, MatTabsModule,
        // FontAwesome
        FontAwesomeModule,
        // Pour l'autocompletion
        FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe,
        // Pour le copier/coller
        ClipboardModule
    ]
})
export class ComposantSelectionCompetenceComponent extends AbstractComponent implements OnInit {

    /** Flag indiquant que les données sont chargées. */
    public donneesChargees = false;

    /** Compétences chargées. */
    private competences: Competence[] = [];

    /** Abroresence sélectionnée. */
    public competencesSelectionnees: Competence[] = [];

    /** Compétences enfant de la dernière compétence sélectionnée */
    public competencesEnfantsDisponibles: Competence[] = [];

    /** Formulaire d'autocompletion (non typé volontairement car saisie d'une string mais sélection d'un OptionCompetence) */
    public controleAutocompletion: FormControl = new FormControl();

    /** Sortie à la sélection d'une compétence*/
    @Output()
    public onSelectionDuneCompetence = new EventEmitter<Competence>();

    /** Liste des résulat de l'autocomplétion*/
    public resultatsAutocompletion: Observable<OptionCompetence[]> | undefined;

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService) { super(); }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // Au chargement des données, récupéation de  la liste des élèves
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                if (donnees && donnees.competences) {
                    this.donneesChargees = true;
                    this.competences = donnees.competences;
                    this.competencesSelectionnees = [];
                    this.definirListeCompetenceEnfant('#');
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);

        // Initialisation de la mécanique d'autocomplétion
        this.resultatsAutocompletion = this.controleAutocompletion.valueChanges.pipe(
            map(recherche => {
                if (recherche && recherche.length > 2) {
                    const rechercheLowercase = recherche.toLowerCase();
                    return this.competences
                        .filter(c => c.text && c.text.includes(rechercheLowercase))
                        .map(c => new OptionCompetence(c, this.calculerLibelleCompletDuneCompetence(c)));
                } else {
                    return [];
                }
            }),
        );
    }

    /** Fonction d'affichage d'une compétence dans l'autocomplétion. */
    public afficherOptionCompetenceDansAutocomplete(option: OptionCompetence): string {
        return option?.textComplet || option?.competence?.text || '';
    }

    /** Concaténation des libellés de chaque compétence. */
    private calculerLibelleCompletDuneCompetence(competence: Competence): string {
        let libelle = '';
        let comp: Competence | undefined = competence;
        while (comp && comp.parent !== "#") {
            libelle = comp.text + ' > ' + libelle;
            comp = this.competences.find(c => c.id == comp?.parent);
        }
        return libelle.substring(0, libelle.length - 3);
    }

    /** Pour faire un copier/coller */
    public recupererLibelleComplet(source: boolean): string {

        // Recherche du libellé en fonction de la source
        let libelleComplet = '';
        if (source) {
            libelleComplet = this.competencesSelectionnees.map(c => c.text).join(' > ');
        } else if (this.controleAutocompletion.value) {
            libelleComplet = this.afficherOptionCompetenceDansAutocomplete(this.controleAutocompletion.value as OptionCompetence);
        }
        return libelleComplet;
    }

    /** Initialisation de 'competencesEnfantsDisponibles' */
    private definirListeCompetenceEnfant(idCompetenceParente: string): void {
        this.competencesEnfantsDisponibles = this.competences.filter(c => c.parent == idCompetenceParente);
    }

    /** Envoi d'un évènement de sélection depuis l'arborescence */
    private selectionnerCompetenceDepuisArborescence(): void {
        if (this.competencesSelectionnees) {
            this.onSelectionDuneCompetence.emit(this.competencesSelectionnees[this.competencesSelectionnees.length - 1]);
        }
    }

    /** Envoi d'un évènement de sélection depuis l'autocompletion */
    public selectionnerCompetenceDepuisAutocompletion(event: MatAutocompleteSelectedEvent): void {
        if (event.option) {
            this.onSelectionDuneCompetence.emit((event.option.value as OptionCompetence).competence);
        }
    }

    /** A la sélection d'une compétence enfant */
    public selectionnerCompetenceEnfant(event: MatSelectChange): void {

        // recherche de la compétence
        const competenceEnfant = this.competences.find(c => c.id === event.value);
        if (competenceEnfant) {

            // Ajout dans la liste
            this.competencesSelectionnees.push(competenceEnfant)

            // Calcul des compétences enfantes suivantes
            this.definirListeCompetenceEnfant(competenceEnfant.id || '#');

            // Envoi de l'évènement de sélection d'une compétence
            this.selectionnerCompetenceDepuisArborescence();
        }
    }

    /** Suppression d'une compétence déjà sélectionnée */
    public supprimerCompetence(competence: Competence): void {

        // Récupération de l'index de l'élément supprimé
        const index = this.competencesSelectionnees.indexOf(competence);

        // Suppression du dernier élément jusqu'à arriver jusqu'à lui
        this.competencesSelectionnees.splice(index, this.competencesSelectionnees.length - index);

        // Reset du contenu de la liste des enfants avec l'ID de la dernière compétence sélectionnée
        if (this.competencesSelectionnees.length > 0) {
            const dernierId = this.competencesSelectionnees[this.competencesSelectionnees.length - 1].id;
            if (dernierId) {
                this.definirListeCompetenceEnfant(dernierId);
            } else {
                this.definirListeCompetenceEnfant('#');
            }
        } else {
            this.definirListeCompetenceEnfant('#');
        }

        // Envoi de l'évènement de sélection d'une compétence
        this.selectionnerCompetenceDepuisArborescence();
    }
}
