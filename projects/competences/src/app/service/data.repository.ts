import { Injectable } from '@angular/core';
import * as model from '../model/model';


@Injectable()
export class DataRepository {

  public static readonly MESSAGE_ERREUR_REFERENCE = 'Aucune année chargée, il faut en vérifier la présence avant d\'y accéder';

  /** Données chargées et en cours d'édition */
  private anneeChargee: model.Annee | undefined;

  getAnneeChargee(): model.Annee {
    if (this.anneeChargee) {
      return this.anneeChargee;
    } else {
      throw new ReferenceError(DataRepository.MESSAGE_ERREUR_REFERENCE);
    }
  }

  /** Pour savoir si une année est chargée */
  isAnneeChargee(): boolean {
    return !!this.anneeChargee;
  }

  /** Initialisation des données chargées et en cours d'édition. */
  setAnneeChargee(annee: model.Annee): void {

    // Parse des données de l'année
    const nouvelleAnnee = new model.Annee();
    nouvelleAnnee.competences = [];
    if (annee.competences) {
      annee.competences.forEach((c) => {
        const newC = new model.Competence();
        newC.id = c.id;
        newC.parent = c.parent;
        newC.text = c.text;
        nouvelleAnnee.competences.push(newC);
      });
    }

    this.anneeChargee = nouvelleAnnee;
  }
}
