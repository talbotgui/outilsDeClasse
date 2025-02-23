import { CommonModule, DatePipe, Location } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorConfig, AngularEditorModule } from '@wfpena/angular-wysiwyg';
import { tap } from 'rxjs';
import { ROUTE_PARAMETRAGE } from '../../../app.routes';
import { Annee } from '../../../model/model';
import { HtmlPipe } from '../../../pipes/html.pipe';
import { DemonstrationService } from '../../../service/bouchon-service';
import { ContexteService } from '../../../service/contexte-service';
import { AbstractRoute } from '../../route';


@Component({
    selector: 'route-parametrage', templateUrl: './route-parametrage.component.html',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatChipsModule, MatSelectModule, MatDatepickerModule,
        // Pour l'éditeur WYSIWYG
        HttpClientModule, AngularEditorModule,
        // FontAwesome
        FontAwesomeModule,
        // Pipes
        HtmlPipe, DatePipe
    ]
})
export class RouteParametrageComponent extends AbstractRoute {

    /** Configuration de l'éditeur */
    public configurationWysiwyg: AngularEditorConfig = {
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
            ['removeFormat']
        ]
    }

    /** Données de l'année à éditer */
    public donnees: Annee | undefined;

    /** Flag du mode édition. */
    public modeEdition: boolean = false;

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private contexteService: ContexteService, activatedRoute: ActivatedRoute, location: Location, demonstrationService: DemonstrationService) {
        super(router, activatedRoute, location, demonstrationService);
    }

    /** Cf. classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_PARAMETRAGE;
    }

    /** Cf. classe parente */
    public initialiserRoute(): void {
        // Au chargement des données,
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            // Récupéation des données
            tap(donnees => this.donnees = donnees)
        ).subscribe();
        super.declarerSouscription(sub);
    }


    /** Pour valider le formulaire via un CRTL+ENTRER */
    protected passerEnModeLecture(): void {
        // Rien à faire
    }

    /** Cf. classe parente */
    public afficherRaffraichirDonnees(): void {

        // MaJ de l'URL avec le bon ID d'élève
        this.mettreAjourUrl({});
    }
}
