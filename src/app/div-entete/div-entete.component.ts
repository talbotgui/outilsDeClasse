import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AbstractComponent } from '../directives/abstract.component';
import { HtmlPipe } from '../pipes/html.pipe';
import { ContexteService } from '../service/contexte-service';

@Component({
    selector: '[div-entete]', templateUrl: './div-entete.component.html', styleUrl: './div-entete.component.scss',
    standalone: true, imports: [
        // Pipes
        HtmlPipe
    ]
})
export class DivEnteteComponent extends AbstractComponent implements OnInit {

    /** Entête à afficher directement dans l'application */
    public entete = '<h1 class="maclasse-h1 maclasse-titreApplication">Application de gestion de ma classe</h1>';

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService) { super(); }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // Au chargement des données, récupéation de  la liste des élèves
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                if (donnees && donnees.enteteEdition) {
                    this.entete = donnees.enteteEdition;
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }
}
