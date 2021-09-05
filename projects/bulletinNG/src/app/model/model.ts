import { Utils } from '../service/utils';

export class ModelUtil {
  static getUID() {
    const n = 8;
    return new Array(n + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);
  }
}

export class Periode {
  public id: number = 0; public nom?: string; public debut: Date | undefined; public fin: Date | undefined;
}

export class Cursus {
  public annee: number = 0; public niveau?: string; public etablissement?: string; public accompagnement?: string;
}

export class Contact {
  public type?: string;
  public nom?: string;
  public email?: string;
  public telephone?: string;
  public adressePostale?: string;
}

export class InclusionEleve {
  public ecoleNom?: string; public ecoleAdresse?: string;
  public nomContact?: string; public emailContact?: string; public telContact?: string;
  public niveau?: string; public enseignant?: string;
}

export class AbsenceEleve {
  public raison?: string; public jour?: string; public heureDebut?: string; public heureFin?: string;
}

export class Eleve {
  static readonly CODE_STATUT_DANS_LA_CLASSE = '2';

  public dateNaissance: Date | undefined;
  public contacts: Contact[] = [];
  public absences: AbsenceEleve[] = [];
  public statut?: string; public bilans?: string; public cursus: Cursus[] = [];
  public dateAdmission: Date | undefined; public accueil?: string; public datesPPA?: string; public datesPAP?: string; public datesESS?: string;
  public droitImage?: string; public autorisationBaignade?: string;
  public inclusion: InclusionEleve = new InclusionEleve();

  constructor(public id: string, public nom: string, public prenom: string) { }
}

export class Competence {
  public id?: string; public text?: string; public parent?: string;
}

export class Note {
  id: string;
  constructor(public valeur: string, public idEleve?: string, public idItem?: string, public date?: Date, public proposition?: string, public constat?: string, public commentaire?: string, public outil?: string) {
    this.id = ModelUtil.getUID();
  }
}

export class Historique {
  public date: Date | undefined; public modification?: string;
}

export class Temps {
  public debut?: string; public fin?: string; public nom?: string; public type?: string; public commentaire?: string;
  public eleves: string[] = []; public competences: string[] = [];
}

export class Journal {
  public date: Date | undefined; public remarque?: string; public temps: Temps[] = [];
}

export class Echeance {
  public termine: boolean = false;
  constructor(public nom: string, public date: Date) { }
}

export class Tache {
  constructor(public titre: string, public echeances: Echeance[] = []) { }

  get avancement(): string {
    if (this.echeances) {
      const nbEcheancesTerminees = this.echeances.filter((el: Echeance) => el.termine).length;
      return nbEcheancesTerminees + '/' + this.echeances.length;
    } else {
      return '';
    }
  }

  get prochaineEcheance(): Date | undefined {
    if (this.echeances) {
      const listeTrieeFiltree = this.echeances.filter((el: Echeance) => !el.termine)
        .sort((a, b) => b.date.getTime() - a.date.getTime());

      if (listeTrieeFiltree.length > 0) {
        return listeTrieeFiltree[listeTrieeFiltree.length - 1].date;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  get terminee(): boolean {
    if (this.echeances) {
      const nbEcheancesTerminees = this.echeances.filter((el: Echeance) => el.termine).length;
      return nbEcheancesTerminees === this.echeances.length;
    } else {
      return false;
    }
  }

  compareTo(autre: Tache): number {
    return this.getStringPourCompare().localeCompare(autre.getStringPourCompare());
  }

  private getStringPourCompare() {
    let stringPourComparer = '' + this.terminee;
    if (!!this.prochaineEcheance && !!this.prochaineEcheance.getTime) {
      stringPourComparer += this.prochaineEcheance.getFullYear() + Utils.formatNumber(this.prochaineEcheance.getMonth());
      stringPourComparer += Utils.formatNumber(this.prochaineEcheance.getDate());
    }
    stringPourComparer += this.titre;
    return stringPourComparer;
  }
}

export class Annee {
  public anneeScolaire?: string; public periodes: Periode[] = [];
  public enteteEdition?: string; public enseignant?: string; public cycleNiveau?: string;
  public libellesTypeTempsJournal: string[] = [];
  public eleves: Eleve[] = []; public competences: Competence[] = []; public notes: Note[] = []; public journal: Journal[] = [];
  public dateDerniereSauvegarde: Date | undefined; public historique: Historique[] = []; public erreursChargement: string[] = [];
  public mapLibelleStatutEleve: any; public mapLibelleNotes: any; public mapTypeContact: any; public mapRaisonAbsence: any;
  public mapLibelleStatutEleveMap: Map<string, string> | undefined = new Map<string, string>();
  public mapLibelleNotesMap: Map<string, string> | undefined = new Map<string, string>();
  public mapTypeContactMap: Map<string, string> | undefined = new Map<string, string>();
  public mapRaisonAbsenceMap: Map<string, string> | undefined = new Map<string, string>();
  public themeSelectionne?: string; public taches: Tache[] = []; public projets: Projet[] = [];
}

export class Projet {
  public nom?: string; public idCompetences: string[] = [];
}

export class SousLigneTableauDeBord {
  constructor(public competence?: Competence, public constatation?: Note, public proposition?: Note) { }
}

export class LigneTableauDeBord {
  public sousLignes: SousLigneTableauDeBord[] = [];

  set constat(value: string) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.constatation) {
        sousLigne.constatation.constat = value;
      }
    }
  }
  get constat() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.constatation && sousLigne.constatation.constat) {
          return sousLigne.constatation.constat;
        }
      }
    }
    return '';
  }
  set proposition(value: string) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.proposition) {
        sousLigne.proposition.proposition = value;
      }
    }
  }
  get proposition() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.proposition && sousLigne.proposition.proposition) {
          return sousLigne.proposition.proposition;
        }
      }
    }
    return '';
  }
  get propositionPrecedente() {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.constatation && sousLigne.constatation.proposition) {
          return sousLigne.constatation.proposition;
        }
      }
    }
    return '';
  }
  set outil(value: string | undefined) {
    for (const sousLigne of this.sousLignes) {
      if (sousLigne.constatation) {
        sousLigne.constatation.outil = value;
      }
    }
  }
  get outil(): string | undefined {
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (sousLigne.constatation && sousLigne.constatation.outil) {
          return sousLigne.constatation.outil;
        }
      }
    }
    return '';
  }
  get sousLignesAvecNotes(): SousLigneTableauDeBord[] {
    const sousLignesAvecNotes: SousLigneTableauDeBord[] = [];
    if (this.sousLignes) {
      for (const sousLigne of this.sousLignes) {
        if (!!sousLigne.constatation && !!sousLigne.constatation.valeur) {
          sousLignesAvecNotes.push(sousLigne);
        }
      }
    }
    return sousLignesAvecNotes;
  }

  get nomDomaineCoupe(): string[] {
    if (this.nomDomaine) {
      return this.nomDomaine.split(' > ');
    } else {
      return [];
    }
  }

  constructor(public idDomaine: string | undefined, public nomDomaine: string | undefined, constatations: Note[] = [], propositions: Note[] = [], mapCompetences: Map<string, Competence>, public idEleve: string, public periodeEvaluee: Periode) {
    this.sousLignes = [];

    // Creation des sousLignes pour les constations
    for (const constatation of constatations) {
      if (constatation.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(constatation.idItem), constatation, undefined));
      }
    }

    // Creation/complétion des sousLignes pour les propositions
    for (const proposition of propositions) {

      // Recherche de la sousLigne par identifiant de competence
      const sousLigneTrouvee = this.sousLignes.find((l) => l.competence !== undefined && l.competence.id === proposition.idItem);
      if (sousLigneTrouvee && !sousLigneTrouvee.proposition) {
        sousLigneTrouvee.proposition = proposition;
      }

      // Si pas trouvé, création d'une sousLigne
      else if (proposition.idItem) {
        this.sousLignes.push(new SousLigneTableauDeBord(mapCompetences.get(proposition.idItem), undefined, proposition));
      }
    }

    // Tri des lignes
    this.sousLignes.sort((a, b) => {
      if (a.competence && b.competence && a.competence.text && b.competence.text) {
        return a.competence.text.localeCompare(b.competence.text)
      } else {
        return -1;
      }
    });
  }
}
