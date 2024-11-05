import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ComposantSauvegardeComponent } from './composants/composant-sauvegarde/composant-sauvegarde.component';
import { DivAideComponent } from './div-aide/div-aide.component';
import { DivContenuComponent } from './div-contenu/div-contenu.component';
import { DivEnteteComponent } from './div-entete/div-entete.component';
import { DivMessageComponent } from './div-message/div-message.component';

@Component({
  selector: '[app-root]', templateUrl: './app.component.html', styleUrl: './app.component.scss',
  standalone: true, imports: [
    // Pour les composants Material
    MatSidenavModule, MatButtonModule, MatTooltipModule,
    // FontAwesome
    FontAwesomeModule,
    // Pour les composants applicatifs
    DivEnteteComponent, DivAideComponent, DivContenuComponent, DivMessageComponent, ComposantSauvegardeComponent
  ]
})
export class AppComponent {

  /** Constructeur pour injection des dépendances. */
  constructor(library: FaIconLibrary) {

    // Pour importer toute la librairie SOLID de FontAwesome et la rendre disponible dans toute l'application
    library.addIconPacks(fas);
  }
}
