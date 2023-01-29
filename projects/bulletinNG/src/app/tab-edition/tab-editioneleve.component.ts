import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { EditionService } from '../service/edition.service';
import { LectureService } from '../service/lecture.service';
import { Utils } from '../service/utils';
import { TabAbstractEditionComponent } from './tab-abstractedition.component';



@Component({ selector: 'tab-editioneleve', templateUrl: './tab-editioneleve.component.html', styleUrls: ['./tab-editioneleve.component.css'] })
export class TabEditionEleveComponent extends TabAbstractEditionComponent {

  // Paramètres venant de la route
  public idEleve?: string;

  // Données à afficher
  public eleve?: model.Eleve;

  // Map des types de contact
  public mapTypeContact: Map<string, string> = new Map();

  // Map des raison d'absence'
  public mapRaisonAbsence: Map<string, string> = new Map();

  // Map des jours de la semaine
  public joursDeLaSemaine: Map<string, string> = new Map();

  // Un constructeur pour se faire injecter les dépendances
  constructor(private routeur: Router, route: ActivatedRoute, editionService: EditionService,
    private lectureService: LectureService, private dataRepository: DataRepository) {
    super(route, editionService);
  }

  // CSS à utiliser à l'impression (entete à 200px et titre à 600px pour impression en paysage dans chrome)
  getCssImpression() {
    return `.edition { font-size: 12px; }
    .edition table { width:100%; text-align: center; vertical-align: middle; border-collapse: collapse!important; }
    .edition td,.edition  th { border: solid 1px black!important; }
    .edition span.libelle { font-weight: bold; }
    .editionEleve-identite { width: 50%; height: 150px; font-size: 30px; }
    .editionEleve-dates { width: 50%; }
    .editionEleve-pere, .editionEleve-mere, .editionEleve-fratrie, .editionEleve-accueil { width: 25%; }
    .editionEleve-datesPPA, .editionEleve-datesPAP, .editionEleve-datesESS { width: 33%; }
    .editionEleve-cursus th { background: none!important; }
    .editionEleve-bilan { border: solid 1px black; font-family: Lucida Grande,Lucida Sans,Arial,sans-serif; font-size: 13.2px; }
    div.entete  { float:left; width:200px; }
    div.titre  { float:left; width:600px; text-align: center; }
    div.annee  { float:right; width:200px; text-align: right; padding-top:30px; }
    div.breakafter { break-after: always; }`;
  }

  // Initialisation de l'édition
  initialiseEdition(params: { [key: string]: any }): void {

    // Récupération des listes de valeur
    this.mapTypeContact = this.lectureService.getMapTypeContactMap();
    this.mapRaisonAbsence = this.lectureService.getmapRaisonAbsenceMap();
    this.joursDeLaSemaine = this.lectureService.creerMapJoursDeLaSemaine();

    // lecture des paramètres
    this.idEleve = params.idEleve;

    if (this.idEleve) {

      // Recherche des objets de référene
      const eleve = this.lectureService.getEleve(this.idEleve);
      if (eleve) {
        this.eleve = eleve;

        // Préparation des données d'entête
        this.titre = 'Fiche de ' + eleve.nom.toUpperCase() + ' ' + eleve.prenom;
        const annee = this.dataRepository.getAnneeChargee();
        this.anneeScolaire = annee.anneeScolaire;
        this.entete = annee.enteteEdition;
      }
    }
  }

  formatDate(valeur?: Date): string {
    return Utils.formatDate(valeur);
  }
  nettoieString(valeur?: string): string {
    return Utils.nettoieString(valeur);
  }

  retour() {
    this.routeur.navigateByUrl('/tab-eleve-route/' + this.idEleve);
  }
}
