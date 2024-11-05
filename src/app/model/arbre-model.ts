import { Competence } from "./note-model";

/** Modèle de données utilisé pour l'arbre de compétence. */
export class NoeudCompetence {

  /** Constructeur pour les données obligatoires. */
  constructor(
    public id: string,
    public text: string,
    public noeudsEnfant: NoeudCompetence[]) {
  }

  /** Lien avec le parent. */
  public noeudParent: NoeudCompetence | undefined;

  /** Calcul du libellé complet de la compétence. */
  public calculerLibelleComplet(): string {
    let libelle = '';
    let noeud: NoeudCompetence | undefined = this;
    while (noeud && noeud.noeudParent) {
      libelle = noeud.text + ' > ' + libelle;
      noeud = noeud.noeudParent;
    }
    return libelle.substring(0, libelle.length - 3);
  }
}

/** Option de compétence dans l'autocompletion de recherche textuelle d'une compétence. */
export class OptionCompetence {
  /** Constructeur pour les données obligatoires. */
  constructor(public competence: Competence, public textComplet: string) { }
}