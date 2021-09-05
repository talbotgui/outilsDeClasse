import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SauvegardeService } from '../service/sauvegarde.service';


@Component({ selector: 'dialog-chargement', templateUrl: './dialog-chargement.component.html', styleUrls: ['./dialog-chargement.component.css'] })
export class DialogChargementComponent implements OnInit {

  // Liste des fichier disponibles
  public fichiers: string[] = [];

  // Fichier sélectionné
  public fichierSelectionne?: string;

  // Données chargées depuis le chargement local
  public jsonChargeDepuisFichierLocal?: string;
  public nomFichierLocal?: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private sauvegardeService: SauvegardeService, private snackBar: MatSnackBar, private dialogRef: MatDialogRef<DialogChargementComponent>) { }

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.sauvegardeService.getlisteSauvegardesDuServeur().subscribe(
      (val) => {
        this.fichiers = val.fichiers
          .filter((element) => element.toUpperCase().endsWith('JSON'))
          .sort((a, b) => b.localeCompare(a));
      }
    );
  }

  onSelectFichierLocal(event: any) {
    const input = event.target;

    // Lecture des données sur les navigateurs HTML5
    const fr = new FileReader();
    fr.onloadend = (e: any) => {
      this.jsonChargeDepuisFichierLocal = e.target['result'];
    };
    fr.readAsText(input.files[0]);
    this.nomFichierLocal = event.srcElement.value.substring(event.srcElement.value.lastIndexOf('/') + event.srcElement.value.lastIndexOf('\\') + 2);
  }

  // A la demande d'annulation
  onDemandeAnnulation() {
    this.dialogRef.close();
  }

  // A la demande de chargement
  onDemandeChargement() {
    // Si les deux ont été demandé
    if (!!this.fichierSelectionne && !!this.jsonChargeDepuisFichierLocal) {
      const message = 'Impossible de sélectionner les deux sources de données !!';
      this.snackBar.open(message, undefined, { duration: 3000 });
    }
    // Si c'est un chargement local
    else if (this.jsonChargeDepuisFichierLocal && this.nomFichierLocal) {
      this.sauvegardeService.chargeAnneeDepuisText(this.nomFichierLocal, this.jsonChargeDepuisFichierLocal);
      this.dialogRef.close();
    }
    // Si c'est un chargement depuis le serveur
    else if (this.fichierSelectionne) {
      this.sauvegardeService.chargeAnneeDuFichier(this.fichierSelectionne);
      this.dialogRef.close();
    }
  }
}
