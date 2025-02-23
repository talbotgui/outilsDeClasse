import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTE_ACCUEIL } from '../../app.routes';
import { DemonstrationService } from '../../service/bouchon-service';
import { AbstractRoute } from '../route';

@Component({
    selector: 'route-accueil', templateUrl: './route-accueil.component.html',
    standalone: true, imports: [
        // FontAwesome
        FontAwesomeModule
    ]
})
export class RouteAccueilComponent extends AbstractRoute {

    /** Flag indiquant qu'un JDD de démonstration est chargé. */
    public unJeuDeDonneesDeDemonstrationEstCharge = false;

    /** Constructeur pour injection des dépendances. */
    public constructor(activatedRoute: ActivatedRoute, router: Router, location: Location, demonstrationService: DemonstrationService) {
        super(router, activatedRoute, location, demonstrationService);
    }

    /** Cf. classe parente */
    public override afficherRaffraichirDonnees(): void {

        // Sauvegarde du flag indiquant qu'un JDD de démonstration est chargé
        this.unJeuDeDonneesDeDemonstrationEstCharge = this.demonstrationService.unJeuDeDonneesDeDemonstrationEstCharge;

        // MaJ de l'URL
        this.mettreAjourUrl({});
    }

    /** Cf. classe parente */
    public override fournirCodeRoute(): string {
        return ROUTE_ACCUEIL;
    }

    /** Cf. classe parente */
    public override initialiserRoute(): void {
        // Rien à faire
    }

    /** Cf. classe parente */
    protected override passerEnModeLecture(): void {
        // Rien à faire
    }

}
