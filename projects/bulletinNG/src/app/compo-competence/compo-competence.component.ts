import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';
import { DialogCompetenceFullTextComponent } from './dialog-competencefulltext.component';


@Component({ selector: 'compo-competence', templateUrl: './compo-competence.component.html', styleUrls: ['./compo-competence.component.css'] })
export class ComposantCompetenceComponent {

  // Mode d'affichage
  @Input()
  public lectureSeule: boolean = false;

  // Note avec sa competence
  @Input()
  public note: model.Note | undefined;

  @Input()
  public temp: model.Temps | undefined;

  // Index de la compétence dans le temps (un model.Temps référence plusieurs compétences)
  @Input()
  public tempIndexCompetence: number = 0;

  // Identifiant de la compétence racine de la sélection
  @Input()
  public idCompetenceRacine?: string;

  // Profondeur maximale de la compétence sélectionnable (3 pour un domaine)
  @Input()
  public profondeurMaximaleAutorisee: number = 99;

  // Projet avec ses competences
  @Input()
  public projet: model.Projet | undefined;

  // Index de la compétence dans le projet
  @Input()
  public projetIndexCompetence: number = 0;

  // Getter masquant la source de l'identifiant (note, temp ou projet)
  get idCompetence(): string | undefined {
    if (this.note && this.note.idItem) {
      return this.note.idItem;
    } else if (this.temp) {
      return this.temp.competences[this.tempIndexCompetence];
    } else if (this.projet) {
      return this.projet.idCompetences[this.projetIndexCompetence];
    } else {
      return undefined;
    }
  }

  // Setter masquant la source de l'identifiant (note, temp ou projet)
  set idCompetence(valeur: string | undefined) {
    if (valeur) {
      if (this.note && this.note.idItem) {
        this.note.idItem = valeur;
      } else if (this.temp) {
        this.temp.competences[this.tempIndexCompetence] = valeur;
      } else if (this.projet) {
        this.projet.idCompetences[this.projetIndexCompetence] = valeur;
      }
    }
  }

  // Libellé complet de la compétence sélectionnée
  get libelleCompletCompetenceSelectionnee(): string {
    const idCompetence = this.idCompetence;
    if (idCompetence) {
      return this.lectureService.getLibelleCompletCompetence(idCompetence, this.idCompetenceRacine);
    } else {
      return '';
    }
  }

  // Liste des enfants
  get listeCompetenceEnfant(): model.Competence[] {
    const idCompetence = this.idCompetence;
    if (!idCompetence) {
      return [];
    }

    // Vérification de la profondeur maximale
    if (this.profondeurMaximaleAutorisee !== 99) {
      const profondeurActuelle = this.lectureService.getAncetresCompetence(idCompetence).length;
      if (profondeurActuelle === this.profondeurMaximaleAutorisee) {
        return [];
      }
    }

    // Renvoi de la liste des enfants
    return this.lectureService.getListeCompetencesEnfant(idCompetence);
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private dialog: MatDialog, private lectureService: LectureService) { }

  // Pour remonter d'un niveau
  selectionnerParent() {
    const idCompetence = this.idCompetence;
    if (idCompetence && idCompetence !== this.idCompetenceRacine) {
      const competence = this.lectureService.getCompetence(idCompetence);
      if (competence && competence.parent) {
        this.idCompetence = competence.parent;
      }
    }
  }

  // Pour afficher la popup de sélection/recherche fullText
  afficherPopupFiltre() {
    const popup = this.dialog.open(DialogCompetenceFullTextComponent, { height: '530px', width: '800px' });
    popup.componentInstance.idCompetenceRacine = this.idCompetenceRacine;
    popup.componentInstance.onSelectionRealisee.subscribe((idCompetence: string) => this.idCompetence = idCompetence);
  }
}
