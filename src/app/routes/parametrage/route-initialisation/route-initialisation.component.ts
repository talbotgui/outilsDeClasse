import { CommonModule, Location } from '@angular/common';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { tap } from 'rxjs';
import { ROUTE_INITIALISATION } from '../../../app.routes';
import { Eleve } from '../../../model/eleve-model';
import { Annee } from '../../../model/model';
import { Projet } from '../../../model/projet-model';
import { DemonstrationService } from '../../../service/bouchon-service';
import { ContexteService } from '../../../service/contexte-service';
import { AbstractRoute } from '../../route';


@Component({
    selector: 'route-initialisation', templateUrl: './route-initialisation.component.html', styleUrl: './route-initialisation.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatTooltipModule, MatRadioModule,
        // FontAwesome
        FontAwesomeModule
    ]
})
export class RouteInitialisationComponent extends AbstractRoute {

    /** Données de l'année à traiter */
    private donnees: Annee | undefined;

    /** Liste des choix pour les élèves */
    public choixParEleve: { eleve: Eleve, choix: 'suppression' | 'vidange' | undefined }[] = [];

    /** Liste des choix pour les projets */
    public choixParProjet: { projet: Projet, choix: 'suppression' | undefined }[] = [];

    /** Flag indiquant que les données de démonstration sont chargées. */
    public unJeuDeDonneesDeDemonstrationEstCharge = false;

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private contexteService: ContexteService, activatedRoute: ActivatedRoute, location: Location, demonstrationService: DemonstrationService) {
        super(router, activatedRoute, location, demonstrationService);
    }

    /** @see classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_INITIALISATION;
    }

    /** @see classe parente */
    public initialiserRoute(): void {
        // Au chargement des données, 
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            //récupéation des données
            tap(donnees => {
                this.donnees = donnees;
                this.afficherRaffraichirDonnees();
            })
        ).subscribe();
        super.declarerSouscription(sub);

        // Sauvegarde du flag
        this.unJeuDeDonneesDeDemonstrationEstCharge = this.demonstrationService.unJeuDeDonneesDeDemonstrationEstCharge;
    }


    /** Pour valider le formulaire via un CRTL+ENTRER */
    protected passerEnModeLecture(): void {
        // Rien à faire
    }

    /** @see classe parente */
    public afficherRaffraichirDonnees(): void {

        // MaJ de l'URL avec le bon ID d'élève
        this.mettreAjourUrl({});

        // Création de la liste des choix
        this.choixParEleve = (this.donnees?.eleves || []).map(eleve => {
            return { eleve: eleve, choix: undefined };
        });

        // Création de la liste des choix
        this.choixParProjet = (this.donnees?.projets || []).map(projet => {
            return { projet: projet, choix: undefined };
        });
    }

    /** Nettoyage de la liste des élèves */
    public nettoyerListeEleves(): void {

        // Pour chaque choix
        this.choixParEleve.forEach(c => {
            // Suppression de l'élève
            if (c.choix === 'suppression' && this.donnees) {
                const index = this.donnees.eleves.indexOf(c.eleve);
                this.donnees.eleves.splice(index, 1);
            }
            // Purge des notes de l'élève
            else if (c.choix === 'vidange' && this.donnees) {
                c.eleve.notes = [];
            }
        });

        // Raffraichir les données
        this.afficherRaffraichirDonnees();
    }

    /** Nettoyage de la liste des projets */
    public nettoyerListeProjets(): void {

        // Pour chaque choix
        this.choixParProjet.forEach(c => {
            // Suppression du projet
            if (c.choix === 'suppression' && this.donnees) {
                const index = this.donnees.projets.indexOf(c.projet);
                this.donnees.projets.splice(index, 1);
            }
        });

        // Raffraichir les données
        this.afficherRaffraichirDonnees();
    }
}
