import { Directive, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AbstractComponent } from '../directives/abstract.component';

@Directive()
export abstract class AbstractRoute extends AbstractComponent implements OnInit {

    /** Constructeur pour injection des dépendances. */
    public constructor(protected router: Router) { super(); }

    /** Fonction implémentée par les routes du projet pour déclencher le refresh des données à l'affichage de l'onglet. */
    public abstract afficherRaffraichirDonnees(): void;

    /** Fonction implémentée par les routes du projet pour retourner le code de la route. */
    public abstract fournirCodeRoute(): string;

    /** Fonction implémentée par les routes du projet pour s'initialiser. */
    public abstract initialiserRoute(): void;

    /** Pour valider le formulaire via un CRTL+ENTRER */
    protected abstract passerEnModeLecture(): void;
    public onKeyUp(event: KeyboardEvent): void {
        if (!!event.ctrlKey && event.key == 'Enter') {
            this.passerEnModeLecture();
        }
    }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // Appel à l'init de la route avant de mettre en place la souscription sur le routeur
        this.initialiserRoute();

        // Mise en place d'une écoute des évènements du ROUTER d'Angular
        const sub = this.router.events.pipe(
            tap(e => {
                if (e instanceof NavigationEnd) {

                    // Récupération de l'URI sans les paramètres
                    let uri = (e as NavigationEnd).urlAfterRedirects;
                    const indexParam = uri.indexOf('?');
                    if (indexParam !== -1) {
                        uri = uri.substring(0, indexParam);
                    }

                    // Récupération du code de la route liée au composant
                    const routeAttendue = '/' + this.fournirCodeRoute();

                    // Si c'est la bonne route, on affiche/refresh
                    if (routeAttendue === uri) {
                        this.afficherRaffraichirDonnees();
                    }
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }
}