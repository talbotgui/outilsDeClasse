import { AvecIdentifiant } from "./model";
import { Competence, Note } from "./note-model";
import { Projet } from "./projet-model";

export class LigneDeTableauDeBord extends AvecIdentifiant {
  public competenceParente: Competence | undefined;
  public projet: Projet | undefined;
  public libelleCompetenceParenteOuNomProjet: string = '';
  public sousLignes: SousLigneDeTableauDeBord[] = [];
}
export class SousLigneDeTableauDeBord extends AvecIdentifiant {
  public competence: Competence | undefined;
  public libelleCompetence: string = '';


  public notePeriodeEvaluee: Note | undefined;
  public referencesProjetPeriodeEvaluee: Projet[] = [];

  public notePeriodePreparee: Note | undefined;
  public referencesProjetPeriodePreparee: Projet[] = [];
}
