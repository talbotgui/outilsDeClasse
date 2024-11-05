import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { tap } from 'rxjs';
import { ComposantAffichageCompetenceComponent } from '../../composants/composant-affichagecompetence/composant-affichagecompetence.component';
import { DialogSelectionCompetenceComponent } from '../../composants/dialogue-selectioncompetence/dialog-selectioncompetence.component';
import { AbstractComponent } from '../../directives/abstract.component';
import { Echeance, Tache } from '../../model/model';
import { ContexteService } from '../../service/contexte-service';
import { TacheService } from '../../service/tache-service';

@Component({
  selector: 'route-tache', templateUrl: './route-tache.component.html', styleUrl: './route-tache.component.scss',
  standalone: true, imports: [
    // Angular
    CommonModule, FormsModule,
    // Matérial
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatCheckboxModule, MatDatepickerModule,
    // FontAwesome
    FontAwesomeModule,
    // Composant applicatif
    ComposantAffichageCompetenceComponent, DialogSelectionCompetenceComponent
  ]
})
export class RouteTacheComponent extends AbstractComponent implements OnInit {

  /** Flag indiquant que les données sont chargées. */
  public donneesChargees: boolean = false;

  /** Id de la tache en cours d'édition. */
  public idTacheEnEdition = '';

  /** Liste des tâches à manipuler. */
  public taches: Tache[] = [];

  /** Constructeur pour injection des dépendances. */
  public constructor(private tacheService: TacheService, private contexteService: ContexteService,) { super(); }

  /** Ajout d'une tâche */
  public ajouterTache(): void {
    // Création d'une tâche
    const nouvelleTache = this.tacheService.ajouterTache(this.taches);

    // Passage en edition immédiatement
    this.idTacheEnEdition = nouvelleTache.id;
  }

  /** Ajout d'une échéance à une tâche. */
  public ajouterEcheance(tache: Tache): void {
    this.tacheService.ajouterEcheance(tache);
  }

  /** Au chargement du composant */
  public ngOnInit(): void {
    // Au chargement des données, récupéation des données
    const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
      tap(donnees => {

        // Si les données sont disponibles
        if (donnees && donnees.taches) {
          // Récupération des données à manipuler
          this.donneesChargees = true;
          this.taches = donnees.taches;

          // Tri des tâches
          this.taches.forEach(t => this.tacheService.trierEcheancesDuneTache(t));
          this.tacheService.trierTaches(this.taches);
        }
      })
    ).subscribe();
    super.declarerSouscription(sub);
  }

  /** Pour valider via un CRTL+ENTRER */
  public onKeyUp(event: KeyboardEvent): void {
    if (!!event.ctrlKey && event.key == "Enter") {
      this.passerEnLecture();
    }
  }

  /** Passer en édition */
  public passerEnEdition(idTache: string): void {
    this.idTacheEnEdition = idTache;
  }

  /** Passer en lecture */
  public passerEnLecture(): void {
    this.idTacheEnEdition = '';

    // Tri des tâches
    this.taches.forEach(t => this.tacheService.trierEcheancesDuneTache(t));
    this.tacheService.trierTaches(this.taches);
  }

  /** Supprimer l'échéance dans la tâche */
  public supprimerEcheance(tache: Tache, echeance: Echeance): void {
    this.tacheService.supprimerEcheance(tache, echeance);
  }

  /** Supprimer la tâche */
  public supprimerTache(tache: Tache): void {
    this.tacheService.supprimerTache(tache, this.taches);
  }
}
