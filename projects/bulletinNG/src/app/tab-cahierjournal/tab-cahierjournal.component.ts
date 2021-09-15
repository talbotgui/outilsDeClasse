import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Editor, toHTML, Toolbar } from 'ngx-editor';
import * as model from '../model/model';
import { JournalService } from '../service/journal.service';
import { LectureService } from '../service/lecture.service';
import { DialogSelectionProjet } from '../tab-projet/dialog-selectionProjet.component';
import { DialogDuplicationComponent } from './dialog-duplication.component';

@Component({ selector: 'tab-cahierjournal', templateUrl: './tab-cahierjournal.component.html', styleUrls: ['./tab-cahierjournal.component.css'] })
export class TabCahierJournalComponent implements OnInit {

  // Editeur HTML global
  public editor: Editor = new Editor();

  // Editeur HTML global
  public editorTemps: Editor = new Editor();

  // Configuration de la barre d'outil de l'éditeur de temps
  public configurationBarre: Toolbar = [
    ['bold', 'italic', 'underline'], ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['text_color', 'background_color'],
  ];

  // Liste des heures pour la sélection de l'heure de début et de fin des temps
  public tempsDisponibles: string[] = [];

  // Liste des types de temps
  public typesDeTemps: string[] = [];

  // Temps dont le commentaire est en cours d'édition
  public tempsEnCoursDedition: model.Temps | undefined;

  // Map des raison d'absence'
  private mapRaisonAbsence?: Map<string, string>;

  // Liste des élèves
  get eleves(): model.Eleve[] {
    return this.lectureService.getListeEleveActif();
  }

  // Filtre de date
  public dateJournal: Date | undefined;
  get timeJournal(): number | undefined {
    return (this.dateJournal) ? this.dateJournal.getTime() : undefined;
  }

  // journal en cours d'édition
  public journal?: model.Journal;

  // Flag utilisé pour éviter la modification d'un journal du passé
  forceEditionJournalDuPasse: boolean = false;
  get journalEditable(): boolean {
    return !this.journalDuPasse || this.forceEditionJournalDuPasse;
  }
  get journalDuPasse(): boolean {
    if (this.journal && this.journal.date) {
      return this.journal.date < new Date();
    } else {
      return false;
    }
  }
  forcerEditionDunJournalDuPasse() {
    this.forceEditionJournalDuPasse = true;
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private lectureService: LectureService,
    private journalService: JournalService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    this.mapRaisonAbsence = this.lectureService.getmapRaisonAbsenceMap();

    // Date par défaut : aujourd'hui
    this.dateJournal = new Date();
    this.dateJournal.setHours(0, 0, 0, 0);
    this.onChangementDateJournal();

    // Initialisation des DropDown
    for (let i = 8; i < 18; i++) {
      this.tempsDisponibles.push(i + 'h00');
      this.tempsDisponibles.push(i + 'h15');
      this.tempsDisponibles.push(i + 'h30');
      this.tempsDisponibles.push(i + 'h45');
    }
    this.typesDeTemps = this.lectureService.getlisteTypeDeTemps();

    this.route.params.subscribe((params: { [key: string]: any }) => {
      // lecture des paramètres
      const timeJournal = params['timeJournal'];

      // Si des paramètres sont présents, initialisation des filtres
      if (timeJournal) {
        this.dateJournal = new Date();
        this.dateJournal.setTime(parseInt(timeJournal, 10));
        this.onChangementDateJournal();
      }
    });

    // à chaque changement dans l'éditeur de bilan, on récupère le contenu sous forme de texte
    this.editor.valueChanges.subscribe(v => {
      if (this.journal) {
        this.journal.remarque = toHTML(v);
      }
    });
    this.editorTemps.valueChanges.subscribe(v => {
      if (this.tempsEnCoursDedition) {
        this.tempsEnCoursDedition.commentaire = toHTML(v);
      }
    });
  }

  onChangementDateJournal() {
    if (this.dateJournal) {
      this.journal = this.lectureService.getJournal(this.dateJournal);
      this.forceEditionJournalDuPasse = false;
      this.tempsEnCoursDedition = undefined;
      this.editorTemps.setContent('');
      if (this.journal && this.journal.remarque) {
        this.editor.setContent(this.journal.remarque);
      }
    }
  }

  creerJournal() {
    if (this.dateJournal) {
      this.journal = this.journalService.ajouterJournal(this.dateJournal);

      // Gestion du commentaire de journal par défaut
      let commentaireJournalParDefaut = '';
      this.lectureService.getListeEleve().forEach(e => {
        if (e.absences) {
          e.absences.forEach(a => {
            if (a.jour == this.dateJournal?.getDay()) {
              const raison = a.raison ? this.mapRaisonAbsence?.get(a.raison) : '';
              commentaireJournalParDefaut += '<li>' + e.prenom + ' : ' + raison + ' de ' + a.heureDebut + ' à ' + a.heureFin + '</li>';
            }
          })
        }
      })
      if (commentaireJournalParDefaut.length > 0) {
        commentaireJournalParDefaut = '<ul>' + commentaireJournalParDefaut + '</ul>';
      }
      this.editor.setContent(commentaireJournalParDefaut);
      this.tempsEnCoursDedition = undefined;
      this.editorTemps.setContent('');
    }
  }

  ajouterOuSupprimerEleve(temps: model.Temps, idEleve: string) {
    if (!this.journalEditable) {
      return;
    }
    const index = temps.eleves.indexOf(idEleve);
    if (index !== -1) {
      temps.eleves.splice(index, 1);
    } else {
      temps.eleves.push(idEleve);
    }
  }

  ajouterTemps() {
    if (this.journal) {
      if (!this.journal.temps) {
        this.journal.temps = [];
      }
      this.journal.temps.push(new model.Temps());
      // Réinitialisation du contenu de l'éditeur de bilan
      this.tempsEnCoursDedition = undefined;
      this.editorTemps.setContent('');
    }
  }

  retirerTemp(index: number) {
    if (this.journal) {
      if (this.tempsEnCoursDedition === this.journal.temps[index]) {
        this.tempsEnCoursDedition = undefined;
        this.editorTemps.setContent('');
      }
      this.journal.temps.splice(index, 1);
    }
  }

  ajouterCompetence(temps: model.Temps) {
    temps.competences.push('#');
  }

  ajouterCompetenceDepuisProjet(temps: model.Temps) {
    const dialog = this.dialog.open(DialogSelectionProjet).componentInstance;
    dialog.onSelectionEmitter.subscribe((projet: model.Projet) => {
      if (projet && projet.idCompetences) {

        let nbAjoutees = 0;
        projet.idCompetences.forEach((idCompetence: string) => {
          if (temps.competences.indexOf(idCompetence) === -1) {
            temps.competences.push(idCompetence);
            nbAjoutees++;
          }
        });

        const message = nbAjoutees + ' compétences ajoutées depuis les ' + projet.idCompetences.length + ' compétences du projet \'' + projet.nom + '\'';
        this.snackBar.open(message, undefined, { duration: 3000 });
      }
    });
  }

  retirerCompetence(temps: model.Temps, index: number) {
    temps.competences.splice(index, 1);
  }

  deplacerTemps(index: number, delta: number) {
    if (this.journal) {
      const index2 = index + delta;
      const temp = this.journal.temps[index2];
      this.journal.temps[index2] = this.journal.temps[index];
      this.journal.temps[index] = temp;
    }
  }

  demandeDuplicationJournal(): void {
    this.tempsEnCoursDedition = undefined;
    if (this.journal) {
      const dialog = this.dialog.open(DialogDuplicationComponent, { height: '200px', width: '400px' }).componentInstance;
      dialog.journal = this.journal;
    }
  }

  demandeDuplicationTemps(temps: model.Temps): void {
    this.tempsEnCoursDedition = undefined;
    if (this.journal) {
      const dialog = this.dialog.open(DialogDuplicationComponent, { height: '200px', width: '400px' }).componentInstance;
      dialog.journal = this.journal;
      dialog.temps = temps;
    }
  }

  changeDate(delta: number) {
    this.tempsEnCoursDedition = undefined;
    if (this.dateJournal) {
      const nouvelleDate = new Date();
      nouvelleDate.setTime(this.dateJournal.getTime() + (delta * 1000 * 3600 * 24));
      nouvelleDate.setHours(0, 0, 0, 0);
      this.dateJournal = nouvelleDate;
      this.onChangementDateJournal();
    }
  }
}
