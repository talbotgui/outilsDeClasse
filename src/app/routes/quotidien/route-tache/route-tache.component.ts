import { CommonModule, Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ROUTE_TACHE } from '../../../app.routes';
import { Echeance, Tache } from '../../../model/model';
import { DemonstrationService } from '../../../service/bouchon-service';
import { ContexteService } from '../../../service/contexte-service';
import { TacheService } from '../../../service/tache-service';
import { AbstractRoute } from '../../route';

@Component({
  selector: 'route-tache', templateUrl: './route-tache.component.html', styleUrl: './route-tache.component.scss',
  standalone: true, imports: [
    // Angular
    CommonModule, FormsModule,
    // Matérial
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatCheckboxModule, MatDatepickerModule,
    // FontAwesome
    FontAwesomeModule
  ]
})
export class RouteTacheComponent extends AbstractRoute {

  /** Id de la tache en cours d'édition. */
  public idTacheEnEdition = '';

  /** Liste des tâches à manipuler. */
  public taches: Tache[] = [];

  /** Constructeur pour injection des dépendances. */
  public constructor(router: Router, private tacheService: TacheService, private contexteService: ContexteService, activatedRoute: ActivatedRoute, location: Location, demonstrationService: DemonstrationService) {
    super(router, activatedRoute, location, demonstrationService);
  }

  /** @see classe parente */
  public fournirCodeRoute(): string {
    return ROUTE_TACHE;
  }

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

  /** @see classe parente */
  public initialiserRoute(): void {
    // Au chargement des données, récupéation des données
    const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
      tap(donnees => {

        // Si les données sont disponibles
        if (donnees && donnees.taches) {
          // Récupération des données à manipuler
          this.taches = donnees.taches;

          // Affichage des données
          this.afficherRaffraichirDonnees();
        }
      })
    ).subscribe();
    super.declarerSouscription(sub);
  }

  /** @see classe parente */
  public afficherRaffraichirDonnees(): void {
    // Tri des tâches
    this.tacheService.trierTaches(this.taches);
    // Uniquement mettre à jour l'URL
    this.mettreAjourUrl({});
  }

  /** Pour valider le formulaire via un CRTL+ENTRER */
  protected passerEnModeLecture(): void {
    this.passerEnLecture();
  }

  /** Passer en édition */
  public passerEnEdition(idTache: string): void {
    this.idTacheEnEdition = idTache;
  }

  /** Passer en lecture */
  public passerEnLecture(): void {
    this.idTacheEnEdition = '';

    // Tri des tâches
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
