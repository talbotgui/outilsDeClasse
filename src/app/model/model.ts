import { Eleve } from "./eleve-model";
import { Journal } from "./journal-model";
import { ModelUtil } from "./model-utils";
import { Competence, Note } from "./note-model";
import { Projet } from "./projet-model";

export class AvecIdentifiant {
  public id: string = ModelUtil.getUID();
}
export class Annee extends AvecIdentifiant {
  public versionMajeureApplication?: number;
  public anneeScolaire?: string;
  public competences: Competence[] = [];
  public cycleNiveau?: string;
  public dateDerniereSauvegarde: Date | undefined;
  public eleves: Eleve[] = [];
  public enseignant?: string;
  public enteteEdition?: string;
  public journal: Journal[] = [];
  public mapLibelleNotes: { [key: string]: string } = {};
  public mapLibelleStatutEleve: { [key: string]: string } = {};
  public mapTypeContact: { [key: string]: string } = {};
  public mapRaisonAbsence: { [key: string]: string } = {};
  public notes: Note[] = [];
  public periodes: Periode[] = [];
  public projets: Projet[] = [];
  public taches: Tache[] = [];
}
export class Periode extends AvecIdentifiant {
  public nom?: string;
  public debut: Date | undefined;
  public fin: Date | undefined;
}
export class Echeance extends AvecIdentifiant {
  public termine: boolean = false;
  public nom?: string;
  public date?: Date;
}
export class Tache extends AvecIdentifiant {
  public titre?: string;
  public echeances: Echeance[] = [];
}
