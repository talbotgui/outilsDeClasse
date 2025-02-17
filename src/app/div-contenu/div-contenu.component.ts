import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';
import { AbstractComponent } from '../directives/abstract.component';
import { ContexteService } from '../service/contexte-service';


@Component({
  selector: '[div-contenu]', templateUrl: './div-contenu.component.html',
  standalone: true, imports: [
    // Pour les routes
    RouterOutlet, CommonModule, RouterLink,
    // Pour les composants Material
    MatTabsModule, MatSidenavModule, MatButtonModule, MatTooltipModule]
})
export class DivContenuComponent extends AbstractComponent implements OnInit {

  /** Flag indiquant que le menu peut être complètement affiché car les données sont chargées. */
  public donneesDeClasseChargee = false;

  /** Flag indiquant que le menu dédié aux problèmes peut être affiché. */
  public problemesDetectes = false;

  /** Route active à un instant T */
  public routeActive: string | undefined;

  /** Constructeur pour injection des dépendances. */
  public constructor(private contexteService: ContexteService, private router: Router) { super(); }

  /** Au chargement du composant */
  public ngOnInit(): void {
    // Si des données sont chargées, 
    const sub1 = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
      // le fait que les données sont chargées est conservé
      tap(donnees => this.donneesDeClasseChargee = !!donnees)
    ).subscribe();
    super.declarerSouscription(sub1);


    // Mise en place d'une écoute des évènements du ROUTER d'Angular
    const sub2 = this.router.events.pipe(
      tap(e => {
        // Si l'évènement est le dernier de la série liée à un changement de page dans le routeur
        // @see https://medium.com/@gurunadhpukkalla/router-events-in-angular-3112a3968660
        if (e instanceof NavigationEnd) {

          // Récupération de l'URI sans les paramètres
          let uri = (e as NavigationEnd).urlAfterRedirects;
          const indexParam = uri.indexOf('?');
          if (indexParam !== -1) {
            uri = uri.substring(0, indexParam);
          }
          this.routeActive = uri;
        }
      })
    ).subscribe();
    super.declarerSouscription(sub2);

    // Si des problèmes sont détectés, 
    const sub3 = this.contexteService.obtenirUnObservableDeDetectionDeProblemeDansLesDonnees().pipe(
      // le fait que des problèmes soient détectés est conservé
      tap(problemes => this.problemesDetectes = !!problemes)
    ).subscribe();
    super.declarerSouscription(sub3);
  }
}
