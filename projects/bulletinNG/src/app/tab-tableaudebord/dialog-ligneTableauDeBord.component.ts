import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'dialog-ligneTableauDeBord', templateUrl: './dialog-ligneTableauDeBord.component.html', styleUrls: ['./dialog-ligneTableauDeBord.component.css']
})
export class DialogLigneTableauDeBordComponent implements OnInit {

  @Input()
  public ligne?: model.LigneTableauDeBord;

  // Lignes du tdb
  public lignes: model.LigneTableauDeBord[] = [];

  // Note utilisée pour sélectionner le domaine
  premiereNote: model.Note | undefined;

  get statutActivationSaisieConstat() {
    const nbSousLignesEvaluees = (this.ligne) ? this.ligne.sousLignes.filter((sousLigne) => !!sousLigne.constatation).length : 0;
    if (nbSousLignesEvaluees > 0) {
      return 'false';
    } else {
      return 'disabled';
    }
  }

  get statutActivationSaisieAide() {
    const nbSousLignesPreparees = (this.ligne) ? this.ligne.sousLignes.filter((sousLigne) => !!sousLigne.proposition).length : 0;
    if (nbSousLignesPreparees > 0) {
      return 'false';
    } else {
      return 'disabled';
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private noteService: NoteService, private lectureService: LectureService, private dialogRef: MatDialogRef<DialogLigneTableauDeBordComponent>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    // Rien à faire
  }

  ajouterLigneProgrammeTravaille(): void {
    if (this.ligne) {
      this.noteService.ajouteNoteDepuisTdb(this.ligne, false);
    }
  }
  ajouterLigneProgrammeEvalue(): void {
    if (this.ligne) {
      this.noteService.ajouteNoteDepuisTdb(this.ligne, true);
    }
  }
  supprimerSousLigneProgrammeTravaille(sousLigne: model.SousLigneTableauDeBord): void {
    if (this.ligne) {
      this.noteService.supprimeNoteDepuisTdb(this.ligne, sousLigne, false);
    }
  }
  supprimerSousLigneProgrammeEvalue(sousLigne: model.SousLigneTableauDeBord): void {
    if (this.ligne) {
      this.noteService.supprimeNoteDepuisTdb(this.ligne, sousLigne, true);
    }
  }
  reporteSousLigneDansPeriodePreparee(sousLigne: model.SousLigneTableauDeBord): void {
    if (this.ligne) {
      this.noteService.creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(this.ligne, sousLigne);
    }
  }

  // méthode à appeler quand la popupup doit s'initialiser sur une ligne vide de note
  initialisePourUneSelectionDeDomaine(mapCompetences: Map<string, model.Competence>, idEleve: string, periodeEvaluee: model.Periode) {
    this.ligne = new model.LigneTableauDeBord(undefined, undefined, [], [], mapCompetences, idEleve, periodeEvaluee);
    this.premiereNote = new model.Note('', this.ligne.idEleve, '#');
  }
  // Validation du domaine sélectionner
  validerDomaine() {
    if (this.premiereNote && this.premiereNote.idItem && this.ligne) {

      // Si une ligne existe déjà pour ce domaine, on l'utilise
      const idDomaineSelectionne = this.premiereNote.idItem;
      const ligneTdbExistantePourCeDomaine = this.lignes.find((uneDesLignes) => uneDesLignes.idDomaine === idDomaineSelectionne);
      if (ligneTdbExistantePourCeDomaine) {
        this.ligne = ligneTdbExistantePourCeDomaine;
      }

      // Sinon, on a crée une
      else {
        const competenceSelectionnee = this.lectureService.getCompetence(this.premiereNote.idItem);
        if (competenceSelectionnee) {
          this.ligne.idDomaine = this.premiereNote.idItem;
          this.ligne.nomDomaine = competenceSelectionnee.id ? this.lectureService.getLibelleCompletCompetence(competenceSelectionnee.id) : '';
          this.premiereNote = undefined;
          this.lignes.unshift(this.ligne);
        }
      }
    }
  }

  fermer() {
    this.dialogRef.close();
  }
}
