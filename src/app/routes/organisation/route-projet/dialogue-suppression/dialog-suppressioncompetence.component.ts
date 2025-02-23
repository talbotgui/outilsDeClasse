import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbstractComponent } from '../../../../directives/abstract.component';

@Component({
  selector: 'dialog-suppressioncompetence', templateUrl: './dialog-suppressioncompetence.component.html',
  standalone: true, imports: [
    // Angular
    CommonModule, MatDialogModule, MatButtonModule, MatTooltipModule
  ]
})
export class DialogSuppressionCompetenceComponent extends AbstractComponent {

  /** Donnée en entrée : description des problèmes. */
  public problemes: string[] = [];

  /** Un constructeur pour se faire injecter les dépendances. */
  constructor(private dialogRef: MatDialogRef<DialogSuppressionCompetenceComponent>) { super(); }

  /** Fermeture de la popup */
  public fermer(): void {
    this.dialogRef.close();
  }
}
