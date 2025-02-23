import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AbstractComponent } from '../../directives/abstract.component';
import { Competence } from '../../model/note-model';
import { ComposantSelectionCompetenceComponent } from '../composant-selectioncompetence/composant-selectioncompetence.component';


@Component({
  selector: 'dialog-selectioncompetence', templateUrl: './dialog-selectioncompetence.component.html',
  standalone: true, imports: [
    // Angular
    CommonModule, MatDialogModule, MatButtonModule, MatTooltipModule,
    // Composant applicatif
    ComposantSelectionCompetenceComponent
  ]
})
export class DialogSelectionCompetenceComponent extends AbstractComponent {

  /** Dernière compétence sélectionnée. */
  private competenceSelectionnee: Competence | undefined;

  /** Un constructeur pour se faire injecter les dépendances. */
  constructor(private dialogRef: MatDialogRef<DialogSelectionCompetenceComponent>) { super(); }

  /** Fermeture de la popup */
  public annuler(): void {
    this.dialogRef.close();
  }

  /** Pour valider le formulaire via un CRTL+ENTRER */
  public onKeyUp(event: KeyboardEvent): void {
    if (!!event.ctrlKey && event.key === 'Enter') {
      this.valider();
    }
  }

  /** Sélection */
  public selectionnerCompetence(competence: any): void {
    this.competenceSelectionnee = competence;
  }

  /** A la validation */
  public valider(): void {
    this.dialogRef.close(this.competenceSelectionnee);
  }
}
