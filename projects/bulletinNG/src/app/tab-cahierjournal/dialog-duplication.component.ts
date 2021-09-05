import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as model from '../model/model';
import { JournalService } from '../service/journal.service';

@Component({
  selector: 'dialog-duplication', templateUrl: './dialog-duplication.component.html', styleUrls: ['./dialog-duplication.component.css']
})
export class DialogDuplicationComponent implements OnInit {

  @Input()
  public journal: model.Journal | undefined;

  @Input()
  public temps: model.Temps | undefined;

  public dateCible: Date | undefined;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private journalService: JournalService, private dialogRef: MatDialogRef<DialogDuplicationComponent>, private snackBar: MatSnackBar) { }

  // A l'initialisation, ouverture automatique du calendrier
  ngOnInit(): void {
    setTimeout(function () {
      ((document.getElementsByClassName("leDatepickerAOuvrirAutomatiquement")[0] as HTMLElement).children[0] as HTMLElement).click();
      setTimeout(function () {
        (document.getElementsByClassName("mat-datepicker-popup")[0] as HTMLElement).style.bottom = '0px';
      }, 5000);
    }, 200);
  }

  annuler() {
    this.dialogRef.close();
  }

  /** Duplication */
  dupliquer() {

    // Validation du formulaire
    if (!this.dateCible) {
      const message = 'Aucune date cible sélectionnée !';
      this.snackBar.open(message, undefined, { duration: 5000 });
      return;
    }

    // Si duplication du temps
    else if (this.journal && this.temps) {
      this.journalService.dupliquerTemps(this.temps, this.dateCible);
    }

    // Si duplication de journal
    else if (this.journal) {
      this.journalService.dupliquerJournal(this.journal, this.dateCible);
    }

    this.dialogRef.close();
  }
}
