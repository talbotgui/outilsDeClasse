import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  /** Date ciblée */
  public dateCible: Date | undefined;

  /** Journal à dupliquer (optionnel) */
  @Input()
  public journal: Journal | undefined;

  /** Temps à dupliquer (optionnel) */
  @Input()
  public temps: Temps | undefined;

  /** Sortie à la demande de duplication. */
  @Output()
  public onSelectionDuplication = new EventEmitter<Date>();

  /** Un constructeur pour se faire injecter les dépendances. */
  constructor(private dialogRef: MatDialogRef<DialogDuplicationComponent>) { super(); }

  /** Fermeture de la popup */
  public annuler(): void {
    this.dialogRef.close();
  }

  /** Duplication */
  public dupliquer(): void {

    // Si pas de date ou pas de données, fin
    if (!this.dateCible) {
      return;
    }

    this.onSelectionDuplication.emit(this.dateCible);

    this.dialogRef.close();
  }
}
