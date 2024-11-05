import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbstractComponent } from '../../../directives/abstract.component';
import { Eleve } from '../../../model/eleve-model';
import { Journal, Temps } from '../../../model/journal-model';
import { JournalService } from '../../../service/journal-service';

@Component({
  selector: 'dialog-duplication', templateUrl: './dialog-duplication.component.html',
  standalone: true, imports: [
    // Angular
    CommonModule, FormsModule, MatDialogModule, MatButtonModule, MatTooltipModule,
    // Matérial
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule
  ]
})
export class DialogDuplicationComponent extends AbstractComponent {

  /** Liste des journaux chargés */
  public journaux: Journal[] | undefined;

  /** Donnees de référence : liste des élèves. */
  public eleves: Eleve[] = []
  /** Donnees de référence : Map des raisons d'absence. */
  public mapRaisonAbsence: { [key: string]: string } | undefined;

  /** Journal à dupliquer (optionnel) */
  @Input()
  public journal: Journal | undefined;

  /** Temps à dupliquer (optionnel) */
  @Input()
  public temps: Temps | undefined;

  /** Date ciblée */
  public dateCible: Date | undefined;

  /** Un constructeur pour se faire injecter les dépendances. */
  constructor(private journalService: JournalService, private dialogRef: MatDialogRef<DialogDuplicationComponent>) { super(); }

  /** Fermeture de la popup */
  public annuler(): void {
    this.dialogRef.close();
  }

  /** Duplication */
  public dupliquer(): void {

    // Si pas de date ou pas de données, fin
    if (!this.dateCible || !this.journaux) {
      return;
    }

    // Recherche du journal à cette date
    const journalCible = this.journalService.rechercherOuCreerJournal(this.journaux, this.dateCible, this.eleves, this.mapRaisonAbsence)

    // Si duplication du temps
    if (this.journal && journalCible) {
      this.journalService.dupliquerJournal(this.journal, journalCible);
    }

    // Si duplication de journal
    else if (this.temps && journalCible) {
      this.journalService.dupliquerTemps(this.temps, journalCible);
    }

    this.dialogRef.close();
  }
}
