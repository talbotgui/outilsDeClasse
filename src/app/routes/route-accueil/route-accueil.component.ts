import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'route-accueil', templateUrl: './route-accueil.component.html',
    standalone: true, imports: [
        // FontAwesome
        FontAwesomeModule
    ]
})
export class RouteAccueilComponent {
}
