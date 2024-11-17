import { AvecIdentifiant } from "./model";
import { Note } from "./note-model";

export class Eleve extends AvecIdentifiant {
  static readonly CODE_STATUT_DANS_LA_CLASSE = '2';

  public nom?: string;
  public prenom?: string;
  public dateNaissance: Date | undefined;
  public statut?: string;
  public bilans?: string;
  public dateAdmission: Date | undefined;
  public accueil?: string;
  public datesPPA?: string;
  public datesESS?: string;
  public droitImage?: string;
  public autorisationBaignade?: string;

  public inclusion: InclusionEleve = new InclusionEleve();
  public contacts: ContactEleve[] = [];
  public absences: AbsenceEleve[] = [];
  public cursus: CursusEleve[] = [];
  public notes: Note[] = [];
}
export class CursusEleve extends AvecIdentifiant {
  public annee: number = 0;
  public niveau?: string;
  public etablissement?: string;
  public accompagnement?: string;
}
export class ContactEleve extends AvecIdentifiant {
  public type?: string;
  public nom?: string;
  public email?: string;
  public telephone?: string;
  public adressePostale?: string;
}
export class InclusionEleve extends AvecIdentifiant {
  public ecoleNom?: string;
  public ecoleAdresse?: string;
  public nomContact?: string;
  public emailContact?: string;
  public telContact?: string;
  public niveau?: string;
  public enseignant?: string;
  public telephoneEnseignant?: string;
}
export class AbsenceEleve extends AvecIdentifiant {
  public raison?: string;
  public jour?: number;
  public frequence?: number;
  public heureDebut?: string;
  public heureFin?: string;
}
