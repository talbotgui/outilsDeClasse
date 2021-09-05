import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';

@Component({
  selector: 'dialog-selectionprojet', templateUrl: './dialog-selectionProjet.component.html', styleUrls: ['./dialog-selectionProjet.component.css']
})
export class DialogSelectionProjet implements OnInit {

  // Pour le retour du projet selectionné
  @Output()
  public onSelectionEmitter = new EventEmitter<model.Projet>(true);

  // Liste des projets
  public projets: model.Projet[] = [];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private dialogRef: MatDialogRef<DialogSelectionProjet>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.projets = this.lectureService.getListeProjets();
  }

  onSelectionProjet(projet: model.Projet): void {
    this.onSelectionEmitter.emit(projet);
    this.fermer();
  }

  fermer() {
    this.dialogRef.close();
  }
}
