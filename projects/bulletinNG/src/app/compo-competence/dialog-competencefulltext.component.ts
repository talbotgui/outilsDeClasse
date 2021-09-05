import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';

export class CompetenceAvecLibelleComplet extends model.Competence {
  public libelleComplet?: string;
}

@Component({
  selector: 'dialog-competencefulltext',
  templateUrl: './dialog-competencefulltext.component.html',
  styleUrls: ['./dialog-competencefulltext.component.css']
})
export class DialogCompetenceFullTextComponent {

  @Input() public idCompetenceRacine: string | undefined;

  @Output() onSelectionRealisee = new EventEmitter<string>();
  public idCompetenceSelectionnee?: string;

  public filtreLibelleCompetence?: string;
  public competencesTrouvees: CompetenceAvecLibelleComplet[] = [];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dialogRef: MatDialogRef<DialogCompetenceFullTextComponent>) { }

  // Affichage du libellé complet de la compétence
  afficherMasquerLibelleComplet(competence: CompetenceAvecLibelleComplet) {
    if (competence.libelleComplet) {
      competence.libelleComplet = undefined;
    } else {
      competence.libelleComplet = this.lectureService.getLibelleCompletCompetence(competence.id as string);
    }
  }

  // Recherche des compétences correspondantes
  rechercher() {
    this.competencesTrouvees = this.lectureService.getCompetenceParTexte(this.filtreLibelleCompetence, this.idCompetenceRacine);
  }

  selectionner() {
    if (this.idCompetenceSelectionnee) {
      this.onSelectionRealisee.emit(this.idCompetenceSelectionnee);
    }
    this.dialogRef.close();
  }
}
