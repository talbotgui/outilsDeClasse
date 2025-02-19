import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { ROUTE_PROBLEME } from '../../app.routes';
import { Annee } from '../../model/model';
import { Probleme } from '../../model/probleme-model';
import { BouchonService } from '../../service/bouchon-service';
import { ContexteService } from '../../service/contexte-service';
import { ProblemeService } from '../../service/probleme-service';
import { AbstractRoute } from '../route';

@Component({
    selector: 'route-probleme', templateUrl: './route-probleme.component.html', styleUrl: './route-probleme.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // FontAwesome
        FontAwesomeModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatSelectModule,
        // Pour l'éditeur WYSIWYG
        HttpClientModule, AngularEditorModule
    ]
})
export class RouteProblemeComponent extends AbstractRoute {

    /** Liste des problèmes à traiter */
    public problemes: Probleme[] | undefined;

    /** Données de l'année à traiter */
    public donnees: Annee | undefined;

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private contexteService: ContexteService, private problemeService: ProblemeService, activatedRoute: ActivatedRoute, location: Location, bouchonService: BouchonService) {
        super(router, activatedRoute, location, bouchonService);
    }

    /** @see classe parente */
    public afficherRaffraichirDonnees(): void {
        // Uniquement mettre à jour l'URL
        this.mettreAjourUrl({});
    }

    /** Au clic sur le bouton de correction */
    public corrigerProbleme(pb: Probleme): void {
        if (this.donnees) {
            this.problemeService.corrigerProbleme(this.donnees, pb);
        }
    }

    /** @see classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_PROBLEME;
    }

    /** @see classe parente */
    public initialiserRoute(): void {

        // Si des problèmes sont détectés, 
        const sub1 = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                if (donnees) {
                    this.donnees = donnees;
                }
            })
        ).subscribe();
        super.declarerSouscription(sub1);

        // Si des problèmes sont détectés, 
        const sub2 = this.contexteService.obtenirUnObservableDeDetectionDeProblemeDansLesDonnees().pipe(
            // le fait que des problèmes soient détectés est conservé
            tap(problemes => {
                if (problemes !== undefined) {
                    this.problemes = problemes;
                }
            })
        ).subscribe();
        super.declarerSouscription(sub2);
    }

    /** @see classe parente */
    protected override passerEnModeLecture(): void {
        // rien à faire ici
    }

    /** Relancer l'analyse */
    public relancerAnalyse(): void {
        if (this.donnees) {
            this.problemeService.analyserDonnees(this.donnees);
        }
    }
}
