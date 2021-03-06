// Les modules Angular importés
// Gestion des locales et des formats de date pour Angular 5
// @see https://angular.io/guide/i18n#i18n-pipes
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDateAdapter } from './dateformat.component';
import { AttributesToMapPipe, MapValuesPipe } from './pipes.component';
import { DataRepository } from './service/data.repository';
import { LectureService } from './service/lecture.service';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';

registerLocaleData(localeFr, 'fr');

// Déclaration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [
    AppComponent, AttributesToMapPipe, MapValuesPipe, TabCompetenceComponent,
  ],

  // Tous les composants à afficher dans un Dialog
  entryComponents: [
  ],

  providers: [
    // Paramétrage global
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DateAdapter, useClass: MyDateAdapter },

    // Les composants injectables
    DataRepository, LectureService

  ],

  // Les modules importés
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpClientModule,

    // Les modules Material
    BrowserAnimationsModule, MatButtonModule, MatCardModule,
    MatNativeDateModule, MatSidenavModule, MatSnackBarModule, MatTooltipModule,
    MatTreeModule, MatInputModule,

    // Déclaration des routes
    AppRoutingModule
  ]
})
export class AppModule { }
