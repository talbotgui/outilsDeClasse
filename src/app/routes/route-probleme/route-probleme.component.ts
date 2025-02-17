import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { ROUTE_PROBLEME } from '../../app.routes';
import { Probleme } from '../../model/probleme-model';
import { ContexteService } from '../../service/contexte-service';
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
    public problemes: Probleme[] = [];

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private contexteService: ContexteService, private activatedRoute: ActivatedRoute, private location: Location, private dialog: MatDialog) {
        super(router);
    }

    /** @see classe parente */
    public afficherRaffraichirDonnees(): void {

        // Si des problèmes sont détectés, 
        const sub1 = this.contexteService.obtenirUnObservableDeDetectionDeProblemeDansLesDonnees().pipe(
            // le fait que des problèmes soient détectés est conservé
            tap(problemes => {
                if (problemes) {
                    this.problemes = problemes;
                }
            })
        ).subscribe();
        super.declarerSouscription(sub1);
    }

    /** @see classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_PROBLEME;
    }

    /** @see classe parente */
    public initialiserRoute(): void {
    }

    /** @see classe parente */
    protected override passerEnModeLecture(): void {
    }
}
