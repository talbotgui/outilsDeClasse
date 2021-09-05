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
import { MatChipsModule } from '@angular/material/chips';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorModule } from 'ngx-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantCompetenceComponent } from './compo-competence/compo-competence.component';
import { DialogCompetenceFullTextComponent } from './compo-competence/dialog-competencefulltext.component';
import { ComposantNoteComponent } from './compo-note/compo-note.component';
import { MyDateAdapter } from './dateformat.component';
import { ComposantMessageSauvegardeComponent } from './div-sauvegarde/compo-messagesauvegarde.component';
import { DialogChargementComponent } from './div-sauvegarde/dialog-chargement.component';
import { DialogSauvegardeComponent } from './div-sauvegarde/dialog-sauvegarde.component';
import { DivSauvegardeComponent } from './div-sauvegarde/div-sauvegarde.component';
import { DivSelecteurStyleComponent } from './div-selecteurstyle/div-selecteurstyle.component';
import { AttributesToMapPipe, MapValuesPipe } from './pipes.component';
import { DataRepository } from './service/data.repository';
import { EditionService } from './service/edition.service';
import { JournalService } from './service/journal.service';
import { LectureService } from './service/lecture.service';
import { NoteService } from './service/note.service';
import { SauvegardeService } from './service/sauvegarde.service';
import { TacheService } from './service/tache.service';
import { TabAccueilComponent } from './tab-accueil/tab-accueil.component';
import { TabAideComponent } from './tab-aide/tab-aide.component';
import { DialogDuplicationComponent } from './tab-cahierjournal/dialog-duplication.component';
import { TabCahierJournalComponent } from './tab-cahierjournal/tab-cahierjournal.component';
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';
import { TabEditionBilanComponent } from './tab-edition/tab-editionbilan.component';
import { TabEditionEleveComponent } from './tab-edition/tab-editioneleve.component';
import { TabEditionJournalComponent } from './tab-edition/tab-editionjournal.component';
import { TabEditionListeEleveComponent } from './tab-edition/tab-editionlisteeleve.component';
import { TabEditionPpiComponent } from './tab-edition/tab-editionppi.component';
import { TabEleveComponent } from './tab-eleve/tab-eleve.component';
import { TabNouvelleAnneeComponent } from './tab-nouvelleannee/tab-nouvelleannee.component';
import { DialogSelectionProjet } from './tab-projet/dialog-selectionProjet.component';
import { TabProjetComponent } from './tab-projet/tab-projet.component';
import { DialogLigneTableauDeBordComponent } from './tab-tableaudebord/dialog-ligneTableauDeBord.component';
import { TabTableauDeBordComponent } from './tab-tableaudebord/tab-tableauDeBord.component';
import { TabTachesComponent } from './tab-taches/tab-taches.component';

registerLocaleData(localeFr, 'fr');

// Déclaration du module
@NgModule({

  // Le composant principal
  bootstrap: [AppComponent],

  // Tous les composants applicatifs de l'application
  declarations: [
    AppComponent, AttributesToMapPipe, ComposantCompetenceComponent, ComposantMessageSauvegardeComponent, ComposantNoteComponent, DialogChargementComponent,
    DialogCompetenceFullTextComponent, DialogDuplicationComponent, DialogLigneTableauDeBordComponent, DialogSauvegardeComponent, DialogSelectionProjet,
    DivSauvegardeComponent, DivSelecteurStyleComponent, MapValuesPipe, TabAccueilComponent, TabAideComponent, TabCahierJournalComponent, TabCompetenceComponent,
    TabEditionBilanComponent, TabEditionEleveComponent, TabEditionListeEleveComponent, TabEditionJournalComponent, TabEditionPpiComponent, TabEleveComponent,
    TabNouvelleAnneeComponent, TabProjetComponent, TabTableauDeBordComponent, TabTachesComponent,
  ],

  // Tous les composants à afficher dans un Dialog
  entryComponents: [
    DialogChargementComponent, DialogCompetenceFullTextComponent, DialogDuplicationComponent, DialogLigneTableauDeBordComponent, DialogSauvegardeComponent,
    DialogSelectionProjet
  ],

  providers: [
    // Paramétrage global
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DateAdapter, useClass: MyDateAdapter },

    // Les composants injectables
    DataRepository, EditionService, JournalService, LectureService, NoteService, SauvegardeService, TacheService

  ],

  // Les modules importés
  imports: [

    // Des modules classiques
    BrowserModule, FormsModule, HttpClientModule,

    // Les modules Material
    BrowserAnimationsModule, MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatGridListModule,
    MatNativeDateModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTooltipModule,
    MatDialogModule, MatTreeModule, MatInputModule,

    // L'éditeur WYSIWYG
    NgxEditorModule,

    // Déclaration des routes
    AppRoutingModule
  ]
})
export class AppModule { }
