import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTE_ACCUEIL } from '../../app.routes';
import { BouchonService } from '../../service/bouchon-service';
import { AbstractRoute } from '../route';

@Component({
    selector: 'route-accueil', templateUrl: './route-accueil.component.html',
    standalone: true, imports: [
        // FontAwesome
        FontAwesomeModule
    ]
})
export class RouteAccueilComponent extends AbstractRoute {

    /** Constructeur pour injection des dépendances. */
    public constructor(activatedRoute: ActivatedRoute, router: Router, location: Location, bouchonService: BouchonService) {
        super(router, activatedRoute, location, bouchonService);
    }

    /** @see classe parente */
    public override afficherRaffraichirDonnees(): void {

        // MaJ de l'URL avec le bon ID d'élève
        this.mettreAjourUrl({});
    }

    /** @see classe parente */
    public override fournirCodeRoute(): string {
        return ROUTE_ACCUEIL;
    }

    /** @see classe parente */
    public override initialiserRoute(): void {
        // Rien à faire
    }

    /** @see classe parente */
    protected override passerEnModeLecture(): void {
        // Rien à faire
    }

}
