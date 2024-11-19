import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbstractComponent } from '../../../directives/abstract.component';
import { Eleve } from '../../../model/eleve-model';
import { Periode } from '../../../model/model';
import { Projet } from '../../../model/projet-model';

@Component({
  selector: 'dialog-suppressioncompetence', templateUrl: './dialog-suppressioncompetence.component.html',
  standalone: true, imports: [
    // Angular
    CommonModule, MatDialogModule, MatButtonModule, MatTooltipModule
  ]
})
export class DialogSuppressionCompetenceComponent extends AbstractComponent {

  /** Donnée en entrée : les élèves posant problème. */
  public elevesPosantProbleme: Eleve[] = [];
  /** Donnée en entrée : la période. */
  public periodes: Periode[] | undefined;
  /** Donnée en entrée : le projet. */
  public projet: Projet | undefined;

  /** Un constructeur pour se faire injecter les dépendances. */
  constructor(private dialogRef: MatDialogRef<DialogSuppressionCompetenceComponent>) { super(); }

  /** Fermeture de la popup */
  public annuler(): void {
    this.dialogRef.close(false);
  }

  /** A la validation */
  public valider(): void {
    this.dialogRef.close(true);
  }
}
