import { Component, Input, OnInit } from '@angular/core';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';


@Component({ selector: 'compo-note', templateUrl: './compo-note.component.html', styleUrls: ['./compo-note.component.css'] })
export class ComposantNoteComponent implements OnInit {

  // Mode d'affichage
  @Input()
  public lectureSeule: boolean = false;

  // Note fournie en entrée
  @Input()
  public note: model.Note | undefined;

  // Libellés des notes
  public libellesNote: any;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.libellesNote = this.lectureService.getMapLibelleNote();
  }
}
