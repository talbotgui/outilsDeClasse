import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as model from '../model/model';
import { DataRepository } from './data.repository';
import { LectureService } from './lecture.service';

@Injectable()
export class NoteService {

  constructor(private dataRepository: DataRepository, private lectureService: LectureService, private snackBar: MatSnackBar) { }

  creerNotePourPeriodeSuivanteApartirDunNoteDePeriodePrecedente(ligne: model.LigneTableauDeBord, sousLigne: model.SousLigneTableauDeBord): void {

    // Recherche de la période suivante
    const periodeSuivante = this.lectureService.getPeriodeSuivante(ligne.periodeEvaluee);

    // cas de la dernière periode de l'année
    if (!periodeSuivante) {
      return;
    }

    // Si la sous-ligne ne contient pas de note à reporter sur la période suivante
    if (!sousLigne.constatation) {
      return;
    }

    // Si la sous-ligne contient déjà une note avec cette compétence pour l'année prochaine
    if (sousLigne.proposition) {
      return;
    }

    // S'il existe une sous-ligne avec cette compétence
    if (ligne.sousLignes.filter((ssl) => ssl.proposition && sousLigne.constatation && ssl.proposition.idItem === sousLigne.constatation.idItem).length !== 0) {
      return;
    }

    // Ajout de la note dans l'année
    const note = new model.Note('', ligne.idEleve, sousLigne.constatation.idItem, periodeSuivante.debut, ligne.proposition, undefined, '');
    this.dataRepository.getAnneeChargee().notes.push(note);

    // Mise à jour de la ligne avec une nouvelle sous ligne
    sousLigne.proposition = note;
  }

  ajouteNoteDepuisTdb(ligne: model.LigneTableauDeBord, ajoutSurPeriodeEvaluee: boolean): void {

    // Lecture des données avec la sélection periodeEvaluee/periodePreparee
    let debutPeriode = ligne.periodeEvaluee.debut;
    let constat: string | undefined = ligne.constat;
    let outil: string | undefined = ligne.outil;
    let proposition: string | undefined;
    if (!ajoutSurPeriodeEvaluee) {
      constat = undefined;
      outil = undefined;
      proposition = ligne.proposition;
      const periodeSuivante = this.lectureService.getPeriodeSuivante(ligne.periodeEvaluee);
      if (periodeSuivante) {
        debutPeriode = periodeSuivante.debut;
      } else {
        console.error('Erreur lors de la recherche de la période suivante pour insérer une note');
        return;
      }
    }

    // Ajout de la note dans l'année
    const note = new model.Note('', ligne.idEleve, ligne.idDomaine, debutPeriode, proposition, constat, '', outil);
    this.dataRepository.getAnneeChargee().notes.push(note);

    // Mise à jour de la ligne avec une nouvelle sous ligne
    if (ligne.idDomaine) {
      const competence = this.lectureService.getCompetence(ligne.idDomaine);
      if (competence) {
        if (ajoutSurPeriodeEvaluee) {
          ligne.sousLignes.push(new model.SousLigneTableauDeBord(competence, note, undefined));
        } else {
          ligne.sousLignes.push(new model.SousLigneTableauDeBord(competence, undefined, note));
        }
      }
    }
  }

  // Ajout d'autant de note que de compétence dans le projet
  ajouteNotesDepuisTdbPourUnProjet(projet: model.Projet, idEleve: string, periode: model.Periode): void {
    if (projet && projet.idCompetences) {

      // Pour chaque note, création d'une note (si aucune n'existe déjà pour cet élève et cette période)
      let nbCompetencesAjoutees = 0;
      projet.idCompetences.forEach((idCompetence: string) => {
        if (this.lectureService.rechercheNotes(idEleve, periode, idCompetence).length === 0) {
          const note = new model.Note('', idEleve, idCompetence, periode.debut);
          this.dataRepository.getAnneeChargee().notes.push(note);
          nbCompetencesAjoutees++;
        }
      });

      const message = nbCompetencesAjoutees + ' notes ajoutées depuis les ' + projet.idCompetences.length + ' compétences du projet \'' + projet.nom + '\'';
      this.snackBar.open(message, undefined, { duration: 3000 });
    }
  }

  /** Fournit les lignes de données pour un tableau de bord. */
  calculerListeLigneTableauDeBord(eleve: model.Eleve, periodeEvaluee: model.Periode): model.LigneTableauDeBord[] {

    const liste: model.LigneTableauDeBord[] = [];
    const periodePreparee = this.lectureService.getPeriodeSuivante(periodeEvaluee);
    const notes: model.Note[] = this.lectureService.getListeNote();

    // Récupération des notes de l'élève sur la période évaluée triées par compétence
    const notesElevePeriodeEvaluee = notes
      .filter((note) => note && note.date && note.idEleve === eleve.id && periodeEvaluee.debut && periodeEvaluee.fin && periodeEvaluee.debut <= note.date && note.date <= periodeEvaluee.fin)
      .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);

    // Récupération des notes de l'élève sur la période préparée triées par compétence
    let notesElevePeriodePreparee: model.Note[] = [];
    if (periodePreparee) {
      notesElevePeriodePreparee = notes
        .filter((note) => note.date && note.idEleve === eleve.id && periodePreparee && periodePreparee.debut && periodePreparee.fin && periodePreparee.debut <= note.date && note.date <= periodePreparee.fin)
        .sort((a, b) => (a.idItem !== undefined && b.idItem !== undefined) ? a.idItem.localeCompare(b.idItem) : 0);
    }

    // Création d'une map avec toutes les notes regroupées par idCompetenceNiveau3
    const mapCompetences: Map<string, model.Competence> = this.lectureService.getMapCompetences();
    const mapNotesEleve: Map<string, { eval: model.Note[], prepa: model.Note[] }> = new Map();
    notesElevePeriodeEvaluee.forEach((note, i) => {
      if (note.idItem) {
        const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
        const element = mapNotesEleve.get(idCompetenceNiveau3);
        if (!element) {
          mapNotesEleve.set(idCompetenceNiveau3, { eval: [note], prepa: [] });
        } else {
          element.eval.push(note);
        }
      }
    });
    notesElevePeriodePreparee.forEach((note, i) => {
      if (note.idItem) {
        const idCompetenceNiveau3 = this.calculIdCompetenceNiveau3(note.idItem, mapCompetences);
        const element = mapNotesEleve.get(idCompetenceNiveau3);
        if (!element) {
          mapNotesEleve.set(idCompetenceNiveau3, { eval: [], prepa: [note] });
        } else {
          element.prepa.push(note);
        }
      }
    });

    // Création de la liste des lignes à partir des map précédentes
    mapNotesEleve.forEach((dto: { eval: model.Note[], prepa: model.Note[] }, idCompetenceNiveau3: string) => {
      const nomDomaine = this.lectureService.getLibelleCompletCompetence(idCompetenceNiveau3);
      liste.push(new model.LigneTableauDeBord(idCompetenceNiveau3, nomDomaine, dto.eval, dto.prepa, mapCompetences, eleve.id, periodeEvaluee));
    });

    // Tri de la liste
    liste.sort((a, b) => {
      if (a.nomDomaine && b.nomDomaine) {
        const aSplit = a.nomDomaine.split('>');
        const bSplit = b.nomDomaine.split('>');
        return (aSplit[2] + '|' + aSplit[1] + '|' + aSplit[3]).localeCompare(bSplit[2] + '|' + bSplit[1] + '|' + bSplit[3]);
      } else {
        return -1;
      }
    });

    return liste;
  }

  supprimeNoteDepuisTdb(ligne: model.LigneTableauDeBord, sousLigne: model.SousLigneTableauDeBord, supprimeSurPeriodeEvaluee: boolean): void {

    // Note à supprimer
    let note: model.Note;
    if (supprimeSurPeriodeEvaluee && sousLigne && sousLigne.constatation) {
      note = sousLigne.constatation;
    } else if (!supprimeSurPeriodeEvaluee && sousLigne && sousLigne.proposition) {
      note = sousLigne.proposition;
    } else {
      return;
    }

    // Suppression de la note dans l'année
    const notes = this.dataRepository.getAnneeChargee().notes;
    notes.splice(notes.indexOf(note), 1);

    // MaJ du DTO
    if (supprimeSurPeriodeEvaluee && sousLigne.proposition) {
      sousLigne.constatation = undefined;
    } else if (!supprimeSurPeriodeEvaluee && sousLigne.constatation) {
      sousLigne.proposition = undefined;
    } else {
      ligne.sousLignes.splice(ligne.sousLignes.indexOf(sousLigne), 1);
    }
  }

  /** Retourne le domaine lié à la compétence idCompetence */
  private calculIdCompetenceNiveau3(idCompetence: string, mapCompetences: Map<string, model.Competence>): string {
    const ancetres: string[] = this.calculListeAncetres(idCompetence, mapCompetences);
    return ancetres[ancetres.length - 4];
  }

  /** Retourne la liste des ancetres de la compétence idCompetence */
  private calculListeAncetres(idCompetence: string, mapCompetences: Map<string, model.Competence>): string[] {
    const ancetres = [];
    let idParent = idCompetence;
    while (idParent !== '#') {
      ancetres.push(idParent);
      const parent = mapCompetences.get(idParent);
      if (parent) {
        idParent = parent.parent as string;
      }
    }
    return ancetres;
  }
}
