import { AvecIdentifiant } from "./model";

export class Projet extends AvecIdentifiant {
  public nom?: string;
  public description?: string;
  public notesCoteEducatif?: string;
  public idsEleve?: string[];
  public sousProjetParPeriode?: SousProjetParPeriode[];
}

export class SousProjetParPeriode extends AvecIdentifiant {
  public idPeriode?: string;
  public commentaire?: string;
  public idCompetences?: string[];
}
