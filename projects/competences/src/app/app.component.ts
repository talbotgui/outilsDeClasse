import { Component, OnInit } from '@angular/core';
import { Annee } from './model/model';
import { Jdd } from './model/model-jdd';
import { DataRepository } from './service/data.repository';


@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {

  constructor(private dataRepository: DataRepository) { }

  // Appel au Repository à l'initialisation du composant
  ngOnInit(): void {

    // Chargement des données à afficher
    this.dataRepository.setAnneeChargee(Jdd.JDD_RICHE as any as Annee);
  }

  get anneeChargee() {
    return this.dataRepository.isAnneeChargee();
  }
  get anneChargeeOuSansDonnees() {
    return this.anneeChargee || window.location.href.indexOf('aide') !== -1 || window.location.href.indexOf('accueil') !== -1 || window.location.href.indexOf('nouvelleAnnee') !== -1;
  }
  rechargerPage() {
    window.location.reload();
  }
}
