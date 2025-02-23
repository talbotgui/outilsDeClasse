import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { tap } from 'rxjs';
import { AbstractComponent } from '../../directives/abstract.component';
import { OptionCompetence } from '../../model/arbre-model';
import { Competence } from '../../model/note-model';
import { ContexteService } from '../../service/contexte-service';

@Component({
    selector: '[composant-affichagecompetence]', templateUrl: './composant-affichagecompetence.component.html',
    standalone: true, imports: [
        // Pour les composants Material
        MatButtonModule, MatTooltipModule,
        // FontAwesome
        FontAwesomeModule,
        // Pour le copier/coller
        ClipboardModule
    ]
})
export class ComposantAffichageCompetenceComponent extends AbstractComponent implements OnInit {

    @Input()
    public affichageMinimal = false;

    @Input()
    public idCompetenceSelectionnee = '';

    /** Flag indiquant que les données sont chargées. */
    public donneesChargees = false;

    /** Compétences chargées. */
    private competences: Competence[] = [];

    /** Abroresence sélectionnée. */
    public competencesSelectionnees: Competence[] = [];

    /** Icone d'action ajouté à la fin */
    @Input()
    public iconeAction: string | undefined;

    /** Libellé de l'action ajouté à la fin */
    @Input()
    public libelleAction: string | undefined;

    /** Sortie au clic. */
    @Output()
    public onAction = new EventEmitter();

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

                    // Définition des compétences à partir de la sélection
                    this.calculerLibelleCompletDuneCompetence();
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Fonction d'affichage d'une compétence dans l'autocomplétion. */
    public afficherOptionCompetenceDansAutocomplete(option: OptionCompetence): string {
        return option?.textComplet || option?.competence?.text || '';
    }

    /** Recherche de l'arborescence des compétences à partir de l'ID fourni en entrée du composant. */
    private calculerLibelleCompletDuneCompetence(): void {

        // Recherche du premier
        let comp: Competence | undefined = this.competences.find(c => c.id === this.idCompetenceSelectionnee);

        // Recherche des autres
        while (comp && comp.parent !== '#') {
            this.competencesSelectionnees.push(comp);
            comp = this.competences.find(c => c.id === comp?.parent);
        }

        // Inversion du tableau
        this.competencesSelectionnees = this.competencesSelectionnees.reverse();
    }

    /** Déclencher l'action */
    public declencherAction(): void {
        this.onAction.emit();
    }

    /** Récupération du libellé complet pour copier/coller */
    public recupererLibelleComplet(): string {
        if (this.competencesSelectionnees) {
            return this.competencesSelectionnees.map(c => c.text).join(' > ');
        } else {
            return '';
        }
    }
}
