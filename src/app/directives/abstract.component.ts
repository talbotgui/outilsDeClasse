import { Directive, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

/**
 * Classe abstraite pour tout composant voulant gérer correctement les souscriptions et notamment leur destruction quand le composant Angular est détruit.
 */
@Directive()
export abstract class AbstractComponent implements OnDestroy {

    /** Liste des souscriptions réalisées par le composant concrêt et à détruire */
    private souscriptions: Subscription[] = [];

    /** Déclaration d'une souscription qui sera détruite à la destruction du composant */
    public declarerSouscription(sub: Subscription): void {
        this.souscriptions.push(sub);
    }

    /** Déclaration d'une souscription qui sera détruite à la destruction du composant */
    public declarerSouscriptions(subs: Subscription[]): void {
        subs.forEach(s => this.souscriptions.push(s));
    }

    /** Destruction des souscriptions créées */
    public detruireLesSouscriptions(): void {
        this.souscriptions.forEach(s => s.unsubscribe());
    }

    /** A la destruction du composant, on détruit ses souscriptions */
    public ngOnDestroy(): void {
        this.detruireLesSouscriptions();
    }
}