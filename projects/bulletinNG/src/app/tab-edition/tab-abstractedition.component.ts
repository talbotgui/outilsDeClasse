import { Directive, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionService } from '../service/edition.service';

@Directive()
export abstract class TabAbstractEditionComponent implements OnInit {

  // Données communes à afficher dans toutes les éditions
  public titre?: string;
  public anneeScolaire?: string;
  public nomPeriode?: string;
  public entete?: string;

  // Un constructeur pour se faire injecter les dépendances
  constructor(private route: ActivatedRoute, private editionService: EditionService) { }

  abstract getCssImpression(): string;
  abstract initialiseEdition(params: { [key: string]: any }): void;

  // Appel au service à l'initialisation du composant
  ngOnInit(): void {
    this.route.params.subscribe((params: { [key: string]: any }) => {
      this.initialiseEdition(params);
    });
  }

  imprimerLaPage(): void {
    const divs = document.getElementsByClassName('edition');
    if (divs && divs.length > 0) {
      this.editionService.creePageEtOuvrePopup(divs[0].outerHTML, this.getCssImpression(), this.titre);
    }
  }

}
