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
    nouvelleAnnee.anneeScolaire = annee.anneeScolaire;
    nouvelleAnnee.enteteEdition = annee.enteteEdition;
    nouvelleAnnee.enseignant = annee.enseignant;
    nouvelleAnnee.cycleNiveau = annee.cycleNiveau;
    nouvelleAnnee.libellesTypeTempsJournal = annee.libellesTypeTempsJournal;
    nouvelleAnnee.themeSelectionne = annee.themeSelectionne;
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
    nouvelleAnnee.eleves = [];
    if (annee.eleves) {
      annee.eleves.forEach((el) => {
        const newE = new model.Eleve(el.id, el.nom, el.prenom);
        newE.dateNaissance = (el.dateNaissance) ? new Date(el.dateNaissance) : undefined;
        newE.dateAdmission = (el.dateAdmission) ? new Date(el.dateAdmission) : undefined;
        newE.statut = el.statut;
        newE.bilans = el.bilans;
        newE.accueil = el.accueil;
        newE.datesPPA = el.datesPPA;
        newE.datesPAP = el.datesPAP;
        newE.datesESS = el.datesESS;
        newE.droitImage = el.droitImage;
        newE.autorisationBaignade = el.autorisationBaignade;
        newE.inclusion = new model.InclusionEleve();
        newE.inclusion.ecoleAdresse = el.inclusion?.ecoleAdresse;
        newE.inclusion.ecoleNom = el.inclusion?.ecoleNom;
        newE.inclusion.emailContact = el.inclusion?.emailContact;
        newE.inclusion.enseignant = el.inclusion?.enseignant;
        newE.inclusion.telephoneEnseignant = el.inclusion?.telephoneEnseignant;
        newE.inclusion.niveau = el.inclusion?.niveau;
        newE.inclusion.nomContact = el.inclusion?.nomContact;
        newE.inclusion.telContact = el.inclusion?.telContact;
        newE.absences = [];
        if (el.absences) {
          el.absences.forEach((a) => {
            const newA = new model.AbsenceEleve();
            newA.raison = a.raison;
            newA.heureDebut = a.heureDebut;
            newA.heureFin = a.heureFin;
            newA.jour = a.jour;
            newE.absences.push(newA);
          });
        }
        newE.contacts = [];
        if (el.contacts) {
          el.contacts.forEach((c) => {
            const newC = new model.Contact();
            newC.adressePostale = c.adressePostale;
            newC.nom = c.nom;
            newC.email = c.email;
            newC.telephone = c.telephone;
            newC.type = c.type;
            newE.contacts.push(newC);
          });
        }
        if (el.cursus) {
          el.cursus.forEach((c) => {
            const newC = new model.Cursus();
            newC.annee = parseInt(c.annee + '', 10);
            newC.niveau = c.niveau;
            newC.etablissement = c.etablissement;
            newC.accompagnement = c.accompagnement;
            newE.cursus.push(newC);
          });
        }
        nouvelleAnnee.eleves.push(newE);
      });
    }
    nouvelleAnnee.notes = [];
    if (annee.notes) {
      annee.notes.forEach((n) => {
        const newN = new model.Note(n.valeur, n.idEleve, n.idItem, this.newDate(n.date), n.proposition, n.constat, n.commentaire, n.outil);
        newN.id = n.id;
        nouvelleAnnee.notes.push(newN);
      });
    }
    nouvelleAnnee.projets = [];
    if (annee.projets) {
      annee.projets.forEach((p) => {
        const newP = new model.Projet();
        newP.nom = p.nom;
        newP.idCompetences = p.idCompetences;
        nouvelleAnnee.projets.push(newP);
      });
    }
    nouvelleAnnee.journal = [];
    if (annee.journal) {
      annee.journal.forEach((j) => {
        const newJ = new model.Journal();
        newJ.date = (j.date) ? new Date(j.date) : undefined;
        newJ.remarque = j.remarque;
        newJ.temps = [];
        if (j.temps) {
          j.temps.forEach((t) => {
            const newT = new model.Temps();
            newT.commentaire = t.commentaire;
            newT.competences = t.competences;
            newT.debut = t.debut;
            newT.eleves = t.eleves;
            newT.fin = t.fin;
            newT.nom = t.nom;
            newT.type = t.type;
            newJ.temps.push(newT);
          });
        }
        nouvelleAnnee.journal.push(newJ);
      });
    }
    nouvelleAnnee.taches = [];
    if (annee.taches) {
      annee.taches.forEach((t) => {
        const newT = new model.Tache(t.titre, []);
        if (t.echeances) {
          t.echeances.forEach((ec) => {
            const newE = new model.Echeance(ec.nom, new Date(ec.date));
            newE.termine = ec.termine;
            newT.echeances.push(newE);
          });
        }
        nouvelleAnnee.taches.push(newT);
      });
    }
    nouvelleAnnee.periodes = [];
    if (annee.periodes) {
      annee.periodes.forEach((p) => {
        const newP = new model.Periode();
        newP.debut = (p.debut) ? new Date(p.debut) : undefined;
        newP.fin = (p.fin) ? new Date(p.fin) : undefined;
        newP.id = parseInt(p.id + '', 10);
        newP.nom = p.nom;
        nouvelleAnnee.periodes.push(newP);
      });
    }

    this.anneeChargee = nouvelleAnnee;

    // Les MAP sont chargées comme des objets classiques avec des attributs. Donc reconstruction manuelle des MAP
    nouvelleAnnee.mapLibelleStatutEleve = annee.mapLibelleStatutEleve;
    this.anneeChargee.mapLibelleStatutEleveMap = new Map<string, string>();
    for (const k in annee.mapLibelleStatutEleve) {
      if (annee.mapLibelleStatutEleve.hasOwnProperty(k)) {
        this.anneeChargee.mapLibelleStatutEleveMap.set(k, annee.mapLibelleStatutEleve[k]);
      }
    }
    nouvelleAnnee.mapLibelleNotes = annee.mapLibelleNotes;
    this.anneeChargee.mapLibelleNotesMap = new Map<string, string>();
    for (const k in annee.mapLibelleNotes) {
      if (annee.mapLibelleNotes.hasOwnProperty(k)) {
        this.anneeChargee.mapLibelleNotesMap.set(k, annee.mapLibelleNotes[k]);
      }
    }
    nouvelleAnnee.mapTypeContact = annee.mapTypeContact;
    this.anneeChargee.mapTypeContactMap = new Map<string, string>();
    for (const k in annee.mapTypeContact) {
      if (annee.mapTypeContact.hasOwnProperty(k)) {
        this.anneeChargee.mapTypeContactMap.set(k, annee.mapTypeContact[k]);
      }
    }
    nouvelleAnnee.mapRaisonAbsence = annee.mapRaisonAbsence;
    this.anneeChargee.mapRaisonAbsenceMap = new Map<string, string>();
    for (const k in annee.mapRaisonAbsence) {
      if (annee.mapRaisonAbsence.hasOwnProperty(k)) {
        this.anneeChargee.mapRaisonAbsenceMap.set(k, annee.mapRaisonAbsence[k]);
      }
    }


    // Initialisation du thème si présent dans les données
    if (this.anneeChargee.themeSelectionne) {
      this.setThemeSelectionne(this.anneeChargee.themeSelectionne);
    }
  }

  /** Getter du thème sélectionné ou 'sobre' par défaut */
  getThemeSelectionne(): string {

    // Si le theme est dans les données
    if (this.anneeChargee && this.anneeChargee.themeSelectionne) {
      return this.anneeChargee.themeSelectionne;
    }

    // Sinon, calcul du theme par défaut
    else {
      let themeParDefaut = 'sobre';
      if (document.cookie.indexOf('theme') === 0) {
        themeParDefaut = document.cookie.split('=')[1].split(';')[0];
      }
      return themeParDefaut;
    }
  }

  /** Pour sauvegarder le theme */
  setThemeSelectionne(theme: string): void {

    // Sauvegarde du theme dans les cookies
    document.cookie = 'theme=' + theme;

    // Sauvegarde du thème dans les données
    if (this.anneeChargee) {
      this.anneeChargee.themeSelectionne = theme;
    }

    // Application du thème
    const el = document.getElementsByTagName('body').item(0);
    if (el) {
      el.className = theme;
    }
  }

  private newDate(date: Date | undefined): Date | undefined {
    if (!!date) {
      return new Date(date);
    } else {
      return date;
    }
  }
}
