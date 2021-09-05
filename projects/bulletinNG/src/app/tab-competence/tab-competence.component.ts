import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as model from '../model/model';
import { LectureService } from '../service/lecture.service';

/** Structure de noeud pour manipuler l'arbre */
export interface MetadataTreeNode {
  expandable: boolean;
  name: string;
  level: number;
  aAfficher: boolean;
  id: string;
}

export class Noeud {
  public aAfficher: boolean = true;
  constructor(public id: string = '', public idParent: string = '', public name: string = '', public children: Noeud[] = []) { }
}

@Component({ selector: 'tab-competence', templateUrl: './tab-competence.component.html', styleUrls: ['./tab-competence.component.css'] })
export class TabCompetenceComponent implements OnInit {

  private _transformer = (node: Noeud, level: number): MetadataTreeNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      aAfficher: !this.validerFiltre() || node.aAfficher,
      id: node.id,
    };
  }

  public treeControl = new FlatTreeControl<MetadataTreeNode>(node => node.level, node => node.expandable);
  public treeFlattener = new MatTreeFlattener<Noeud, MetadataTreeNode>(this._transformer, node => node.level, node => node.expandable, node => node.children);
  public dataSource = new MatTreeFlatDataSource<Noeud, MetadataTreeNode>(this.treeControl, this.treeFlattener);

  // Compétence sélectionnnée
  public libelleCompletCompetenceSelectionnee?: string;

  // Noeuds à afficher
  public noeuds: Noeud[] = [];

  // Filtre de recherche dans l'arbre
  private tmpfiltre?: string;
  private motsDuFiltre: string[] = [];
  set filtre(valeur: string | undefined) {
    this.tmpfiltre = valeur;
    if (valeur) {
      this.motsDuFiltre = valeur.toUpperCase().replace(/\-/g, '').split(' ');
    } else {
      this.motsDuFiltre = [];
    }
  }
  get filtre(): string | undefined {
    return this.tmpfiltre;
  }

  // Un constructeur pour se faire injecter les dépendances
  constructor(private lectureService: LectureService, private snackBar: MatSnackBar) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {

    // Récupère la liste des compétences
    const competences: model.Competence[] = this.lectureService.getListeCompetence();

    // Initialise une Map des TreeData pour retrouver les parents et y insérer les enfants
    const mapNoeuds: Map<string, Noeud> = new Map<string, Noeud>();

    // Pour chaque compétence,
    let presenceErreur: boolean = false;
    for (const competence of competences) {

      // création du noeud et ajout dans la map
      const noeud: Noeud = new Noeud(competence.id, competence.parent, competence.text, []);
      mapNoeuds.set(competence.id as string, noeud);

      // Si c'est un noeud ROOT, on l'ajoute
      if (competence.parent === '#') {
        this.noeuds.push(noeud);
      }

      // Sinon on insert le noeud dans la liste des enfants de son parent
      else if (competence.parent) {
        const parent: Noeud | undefined = mapNoeuds.get(competence.parent);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(noeud);
        } else {
          const message = 'ERREUR : la compétence \'' + competence.parent + '\' n\'est pas déclaré son enfant \'' + competence.id + '\'';
          console.error(message);
          presenceErreur = true;
        }
      }
    }

    // insertion des noeuds racine dans le datasource
    this.dataSource.data = this.noeuds;

    // Si des erreurs de données sont présentes, affichage du snackBar
    if (presenceErreur) {
      this.snackBar.open('ERREUR dans les données. Taper F12 pour plus de détais', undefined, { duration: 30000 });
    }
  }


  // Fonction de traitement des noeuds
  private traiterNoeudRecursivement(n: Noeud): boolean {
    let auMoinsUnEnfantAffiche = false;
    if (n.children) {
      for (const c of n.children) {
        if (this.traiterNoeudRecursivement(c)) {
          auMoinsUnEnfantAffiche = true;
        }
      }
    }
    const correspondAuFiltre = this.lectureService.compareLibelleCompetencePourRecherche(n.name.toUpperCase(), this.motsDuFiltre);
    const nbEnfants = (n.children) ? n.children.length : 0;
    return n.aAfficher = correspondAuFiltre || auMoinsUnEnfantAffiche;
  }

  public recherche() {
    // Si un filtre valide est saisi, exécution à partir des noeuds racine
    if (this.validerFiltre()) {
      for (const c of this.noeuds) {
        this.traiterNoeudRecursivement(c);
      }
    }

    // insertion des noeuds racine dans le datasource
    this.dataSource.data = this.noeuds;

    // Vidange de la compétence sélectionnée
    this.libelleCompletCompetenceSelectionnee = '';
  }

  private validerFiltre(): boolean {
    return this.motsDuFiltre && this.motsDuFiltre.length > 0 && this.motsDuFiltre[0].length > 3;
  }

  public selectionnerCompetence(idCompetence: string): void {
    this.libelleCompletCompetenceSelectionnee = this.lectureService.getLibelleCompletCompetence(idCompetence);
  }
}
