import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editor, toHTML } from 'ngx-editor';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';
import { LectureService } from '../service/lecture.service';


@Component({ selector: 'tab-eleve', templateUrl: './tab-eleve.component.html', styleUrls: ['./tab-eleve.component.css'] })
export class TabEleveComponent implements OnInit {

  // Editeur HTML
  public editor: Editor = new Editor();

  // Liste des élèves à afficher
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleve();
  }

  // Elève en cours d'édition
  public eleveSelectionne?: model.Eleve;

  // Map des status d'élève
  public mapStatutEleve?: Map<string, string>;

  // Map des types de contact
  public mapTypeContact?: Map<string, string>;

  // Map des raison d'absence'
  public mapRaisonAbsence?: Map<string, string>;

  // Map des jours de la semaine
  public joursDeLaSemaine: Map<string, string> = new Map();

  // Liste des heures pour la sélection de l'heure de début et de fin des temps
  public tempsDisponibles: string[] = [];

  /** Bidouille très moche pour remplacer le DatePicker de material qui ne fonctionne pas avec l'i18n et dans un form */
  public parserDate(e: any): Date | undefined {
    const saisie = (e.target as HTMLInputElement).value;
    if (saisie && saisie.length === 10) {
      const str = saisie.split('/');
      return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
    } else {
      return undefined;
    }
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private lectureService: LectureService, private dataRepository: DataRepository) { }

  // Appel au service à l'initialisation du composant
  public ngOnInit(): void {
    this.mapStatutEleve = this.lectureService.getMapLibelleStatutEleveMap();
    this.mapTypeContact = this.lectureService.getMapTypeContactMap();
    this.mapRaisonAbsence = this.lectureService.getmapRaisonAbsenceMap();
    this.joursDeLaSemaine = this.lectureService.creerMapJoursDeLaSemaine();

    // Initialisation des DropDown
    for (let i = 8; i < 18; i++) {
      this.tempsDisponibles.push(i + 'h00');
      this.tempsDisponibles.push(i + 'h15');
      this.tempsDisponibles.push(i + 'h30');
      this.tempsDisponibles.push(i + 'h45');
    }

    this.route.params.subscribe((params: { [key: string]: any }) => {
      // lecture des paramètres
      const idEleve = params['idEleve'];

      // Si des paramètres sont présents, initialisation des filtres
      if (idEleve) {
        const eleve = this.lectureService.getEleve(idEleve);
        if (eleve) {
          this.eleveSelectionne = eleve;
        }
      }
    });

    // à chaque changement dans l'éditeur de bilan, on récupère le contenu sous forme de texte
    this.editor.valueChanges.subscribe(v => {
      if (this.eleveSelectionne) {
        this.eleveSelectionne.bilans = toHTML(v);
      }
    });
  }

  public ajouterUnContact(): void {
    if (this.eleveSelectionne) {
      this.eleveSelectionne.contacts.push(new model.Contact());
    }
  }

  // A la sélection d'un élève
  public onSelectEleve(eleve: model.Eleve) {
    this.eleveSelectionne = eleve;
    // Réinitialisation du contenu de l'éditeur de bilan
    this.editor.setContent(this.eleveSelectionne.bilans ? this.eleveSelectionne.bilans : '');
  }

  public creerEleve(): void {
    this.dataRepository.getAnneeChargee().eleves.push(new model.Eleve(model.ModelUtil.getUID(), 'Nouvel', 'Eleve'));
  }

  public ajouterUneAbsence(): void {
    if (this.eleveSelectionne) {
      if (!this.eleveSelectionne.absences) {
        this.eleveSelectionne.absences = [];
      }
      this.eleveSelectionne.absences.push(new model.AbsenceEleve());
    }
  }

  public retirerUneAbsence(absence: model.AbsenceEleve): void {
    if (this.eleveSelectionne) {
      if (this.eleveSelectionne.absences) {
        const index = this.eleveSelectionne.absences.indexOf(absence);
        if (0 <= index && index < this.eleveSelectionne.absences.length) {
          this.eleveSelectionne.absences.splice(index, 1);
        }
      }
    }
  }

  public ajouterCursus(): void {
    if (this.eleveSelectionne) {
      let anneeSuivante = (this.eleveSelectionne.dateNaissance) ? this.eleveSelectionne.dateNaissance.getFullYear() : 0;
      if (!this.eleveSelectionne.cursus) {
        this.eleveSelectionne.cursus = [];
      } else if (this.eleveSelectionne.cursus.length > 0) {
        anneeSuivante = this.eleveSelectionne.cursus[this.eleveSelectionne.cursus.length - 1].annee + 1;
      }
      const nouveauCursus = new model.Cursus();
      nouveauCursus.annee = anneeSuivante;
      this.eleveSelectionne.cursus.push(nouveauCursus);
    }
  }

  public retirerCursus(cursus: model.Cursus): void {
    if (this.eleveSelectionne) {
      const index = this.eleveSelectionne.cursus.indexOf(cursus);
      if (0 <= index && index < this.eleveSelectionne.cursus.length) {
        this.eleveSelectionne.cursus.splice(index, 1);
      }
    }
  }
}
