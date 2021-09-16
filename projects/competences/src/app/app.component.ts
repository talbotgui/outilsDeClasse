import { Component, OnInit } from '@angular/core';
import { Annee } from './model/model';
import { Jdd } from './model/model-jdd';
import { DataRepository } from './service/data.repository';
import { SauvegardeService } from './service/sauvegarde.service';


@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {

  constructor(private sauvegardeService: SauvegardeService, private dataRepository: DataRepository) { }

  // Appel au Repository à l'initialisation du composant
  ngOnInit(): void {
    // Si le parametre 'offline' est présent, informe le Repository de ne pas accéder au réseau
    if (window.location.toString().indexOf('offline') > -1) {
      this.sauvegardeService.travailleHorsReseau();
    }

    // En cas de demande de raffraissement avec une année chargée
    window.onbeforeunload = () => {
      // Plus de message personnalisé possible
      // @See https://www.chromestatus.com/feature/5349061406228480
      if (this.dataRepository.isAnneeChargee() && window.location.toString().indexOf('sansAlerte') === -1) {
        return true;
      } else {
        return;
      }
    };

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
