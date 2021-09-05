import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';
import { NoteService } from '../service/note.service';
import { DialogSelectionProjet } from '../tab-projet/dialog-selectionProjet.component';
import { DialogLigneTableauDeBordComponent } from './dialog-ligneTableauDeBord.component';

@Component({ selector: 'tab-tableauDeBord', templateUrl: './tab-tableauDeBord.component.html', styleUrls: ['./tab-tableauDeBord.component.css'] })
export class TabTableauDeBordComponent implements OnInit {

  // Liste des filtres
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleveActif();
  }
  get periodes(): model.Periode[] {
    return this.lectureService.getListePeriode();
  }

  // Valeur des filtres
  public eleveSelectionne: model.Eleve | undefined;
  public periodeSelectionnee: model.Periode | undefined;

  // Contenu du tableau de bord
  public lignes: model.LigneTableauDeBord[] = [];

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private lectureService: LectureService, private noteService: NoteService, private dialog: MatDialog) { }

  // Initialiation
  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: any }) => {
      // lecture des paramètres
      const idEleve = params['idEleve'];
      const idPeriode = parseInt(params['idPeriode'], 10);

      // Si des paramètres sont présents, initialisation des filtres
      if (idEleve && idPeriode) {
        const eleveTrouve = this.lectureService.getEleve(idEleve);
        const periodeTrouvee = this.lectureService.getPeriodeById(idPeriode);
        if (eleveTrouve && periodeTrouvee) {
          this.eleveSelectionne = eleveTrouve;
          this.periodeSelectionnee = periodeTrouvee;
        }
      }

      // Rechargement des lignes
      this.rechargeLesLignes();
    });
  }

  // A la sélection d'un filtre
  onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
    this.rechargeLesLignes();
  }
  onSelectPeriode(periode: model.Periode) {
    this.periodeSelectionnee = periode;
    this.rechargeLesLignes();
  }

  // Pour recharger les lignes
  rechargeLesLignes() {
    if (this.eleveSelectionne && this.periodeSelectionnee) {
      this.lignes = this.noteService.calculerListeLigneTableauDeBord(this.eleveSelectionne, this.periodeSelectionnee);
    } else {
      this.lignes = [];
    }
  }

  // Ouverture de la popup d'édition à la sélection d'une ligne
  onSelectLigne(laLigne: model.LigneTableauDeBord) {
    const dialog = this.dialog.open(DialogLigneTableauDeBordComponent).componentInstance;
    dialog.ligne = laLigne;
  }

  // Pour créer une ligne
  creeNouvelleLigne() {
    if (this.eleveSelectionne && this.periodeSelectionnee) {
      const mapCompetences = this.lectureService.getMapCompetences();
      const dialog = this.dialog.open(DialogLigneTableauDeBordComponent).componentInstance;
      dialog.initialisePourUneSelectionDeDomaine(mapCompetences, this.eleveSelectionne.id, this.periodeSelectionnee);
      dialog.lignes = this.lignes;
    }
  }

  // Pour créer les lignes correspondantes aux compétences d'un projet
  creeNouvellesLignesDepuisUnProjet(): void {
    const dialog = this.dialog.open(DialogSelectionProjet).componentInstance;
    dialog.onSelectionEmitter.subscribe((projet: model.Projet) => {
      if (this.eleveSelectionne && this.periodeSelectionnee) {
        this.noteService.ajouteNotesDepuisTdbPourUnProjet(projet, this.eleveSelectionne.id, this.periodeSelectionnee);
      }
      this.rechargeLesLignes();
    });
  }
}
