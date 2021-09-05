import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataRepository } from '../service/data.repository';
import { SauvegardeService } from '../service/sauvegarde.service';
import { DialogChargementComponent } from './dialog-chargement.component';
import { DialogSauvegardeComponent } from './dialog-sauvegarde.component';

@Component({ selector: 'div-sauvegarde', templateUrl: './div-sauvegarde.component.html', styleUrls: ['./div-sauvegarde.component.css'] })
export class DivSauvegardeComponent {

  get messageSauvegarde() {
    let mess = this.sauvegardeService.getDateDerniereSauvegardeDeLaSession();
    if (!mess) {
      mess = { message: '', date: undefined };
    }
    return mess;
  }

  constructor(private dialog: MatDialog, private dataRepository: DataRepository, private sauvegardeService: SauvegardeService) { }

  // A la demande de chargement d'un fichier
  ouvreDialogChargement() {
    this.dialog.open(DialogChargementComponent, { height: '380px', width: '400px' });
  }

  // A la demande de sauvegarde
  ouvreDialogSauvegarde() {
    this.dialog.open(DialogSauvegardeComponent, { height: '220px', width: '350px' });
  }

  // Condition d'affichage des boutons
  get anneeChargee() {
    return this.dataRepository.isAnneeChargee();
  }
}
