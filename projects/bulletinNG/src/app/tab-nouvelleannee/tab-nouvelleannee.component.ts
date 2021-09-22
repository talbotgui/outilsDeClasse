import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { CompetencesParDefaut } from './competencesParDefaut';

@Component({ selector: 'tab-nouvelleannee', templateUrl: './tab-nouvelleannee.component.html', styleUrls: ['./tab-nouvelleannee.component.css'] })
export class TabNouvelleAnneeComponent implements OnInit {

  public anneeCharge?: boolean;
  public anneeAtelecharger?: model.Annee;

  public repriseEleves: boolean = false;
  public repriseCompetences: boolean = false;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.anneeCharge = this.dataRepository.isAnneeChargee();

    // Duplication de l'année chargée
    if (!!this.anneeCharge) {
      this.anneeAtelecharger = Object.assign({}, this.dataRepository.getAnneeChargee());
      this.anneeAtelecharger.journal = [];
      this.anneeAtelecharger.notes = [];
      this.anneeAtelecharger.historique = [];
      this.anneeAtelecharger.erreursChargement = [];
      this.anneeAtelecharger.projets = [];
      this.anneeAtelecharger.taches = [];
    }

    // Création d'une année par défaut
    else {
      this.anneeAtelecharger = new model.Annee();
      this.anneeAtelecharger.enseignant = "";
      this.anneeAtelecharger.cycleNiveau = "";
      this.anneeAtelecharger.anneeScolaire = "";
      this.anneeAtelecharger.enteteEdition = "Académie XXXX<br/>Département XXXX<br/>Circonscription XXX<br/>École : xxxxx<br/>Adresse : xxxxxxxxxxxxxxxxxxx<br/>Téléphone : 000000000000<br/>Courriel : xxxx@xxxx.xx";

      this.anneeAtelecharger.periodes = [];
      this.ajoutePeriode(this.anneeAtelecharger.periodes, 1, new Date('2018-09-03'), new Date('2018-10-20'));
      this.ajoutePeriode(this.anneeAtelecharger.periodes, 2, new Date('2018-11-05'), new Date('2018-12-22'));
      this.ajoutePeriode(this.anneeAtelecharger.periodes, 3, new Date('2019-01-07'), new Date('2019-02-09'));
      this.ajoutePeriode(this.anneeAtelecharger.periodes, 4, new Date('2019-02-25'), new Date('2019-04-06'));
      this.ajoutePeriode(this.anneeAtelecharger.periodes, 5, new Date('2019-04-23'), new Date('2019-07-06'));

      this.anneeAtelecharger.libellesTypeTempsJournal = ["Apprentissage", "Entraînement", "Réinvestissement", "Evaluation"];
      this.anneeAtelecharger.mapLibelleNotes = { '0': 'non atteint', '1': 'atteint partiellement', '2': 'atteint', '3': 'dépassé', 'n': 'non évalué', 'a': 'absent' };
      this.anneeAtelecharger.mapLibelleStatutEleve = { '0': 'hors établissement', '1': 'dans l\'établissement', '2': 'dans la classe' }
      this.anneeAtelecharger.mapTypeContact = { P: "Père", M: "Mère", S: "Structure", F: "Famille d'accueil", A: "Autre" };
      this.anneeAtelecharger.mapTypeContact = { P: "Père", M: "Mère", S: "Structure", F: "Famille d'accueil", A: "Autre" };
      this.anneeAtelecharger.mapRaisonAbsence = { I: "Inclusion", O: "Orthophoniste", PM: "Psychomotricité", P: "Psychologue", A: "Autre" };
      this.anneeAtelecharger.competences = CompetencesParDefaut.COMPETENCES_PAR_DEFAUT;
    }
  }

  private ajoutePeriode(periodes: model.Periode[], i: number, debut: Date, fin: Date): void {
    const newP = new model.Periode();
    newP.debut = debut;
    newP.fin = fin;
    newP.id = i;
    newP.nom = 'Periode ' + i;
    periodes.push(newP);
  }

  onDemandeCreationFichier(): void {
    if (this.anneeAtelecharger) {
      // Suppression de données à ne pas reprendre
      delete this.anneeAtelecharger.mapLibelleNotesMap;
      delete this.anneeAtelecharger.mapTypeContactMap;
      delete this.anneeAtelecharger.mapRaisonAbsenceMap;
      delete this.anneeAtelecharger.mapLibelleStatutEleveMap;
      if (!this.repriseEleves) {
        this.anneeAtelecharger.eleves = [];
      }
      if (!this.repriseCompetences) {
        this.anneeAtelecharger.competences = [];
      }

      const nomDuFichier = 'nouveauFichierDeDonnees.json';
      const contenuFichier = JSON.stringify(this.anneeAtelecharger, null, 2);
      const leBlob = new Blob([contenuFichier], { type: 'text/plain;charset=utf-8' });
      const resultat = { nomFichier: nomDuFichier, blob: leBlob };
      saveAs(resultat.blob, resultat.nomFichier);
    }
  }
}
