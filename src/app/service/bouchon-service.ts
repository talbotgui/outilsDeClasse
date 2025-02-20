import { afterNextRender, Injectable } from '@angular/core';
import { AbstractComponent } from '../directives/abstract.component';
import { Jdd } from '../model/jdd';
import { MessageAafficher, TypeMessageAafficher } from '../model/message-model';
import { ChargementService } from './chargement-service';
import { ContexteService } from './contexte-service';

@Injectable({ providedIn: 'root' })
export class DemonstrationService extends AbstractComponent {

    /** Flag public */
    public unJeuDeDonneesDeDemonstrationEstCharge = false;

    /** Constructeur pour injection des dépendances. */
    constructor(private chargementService: ChargementService, private contexteService: ContexteService) {
        super();

        // Pour accéder à l'objet WINDOW (qui est propre à un navigateur), il faut utiliser afterNextRender dans un constructeur
        afterNextRender(() => {
            if (window.location.href.indexOf('demonstration') !== -1) {
                this.chargerUnJddDeDemonstration();
            }
        });
    }

    /** Charger un jeu de données de bouchon. */
    public chargerUnJddDeDemonstration(): void {
        // Initialisation du flag avant le chargement réel (pour que le flag soit true avant le déclenchement de l'évènement dans le contexte)
        this.unJeuDeDonneesDeDemonstrationEstCharge = true

        // un jeu de données est chargé par défaut
        const annee = Jdd.JDD_RICHE;

        // Pour ajouter un cas de chaque type d'erreur possible
        // Jdd.ajouterDesErreurAuJdd(annee);

        // Chargement des données
        const sub = this.chargementService.chargerDonneesDeClasse(JSON.stringify(annee)).subscribe();
        super.declarerSouscription(sub);

        // Un message est affiché
        this.contexteService.afficherUnMessageGeneral(new MessageAafficher('AppComponent', TypeMessageAafficher.Information, 'Jeu de données de démonstration a été chargé du fait de la présence du paramètre \'demonstration\' dans l\'adresse du navigateur'));
    }
}