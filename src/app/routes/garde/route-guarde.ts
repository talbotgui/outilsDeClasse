import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { map, Observable } from "rxjs";
import { ContexteService } from "../../service/contexte-service";


/** Guarde détectant que les données sont déjà chargées. */
export const ROUTER_GUARD = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean => {
    // Ce n'est pas un composant mais une méthode
    const contexteService = inject(ContexteService);

    // Appel au context pour savoir si les données sont chargées
    return contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse()
        // Renvoi de TRUE ou FALSE en fonction de la présence des données
        .pipe(map(donnees => !!donnees));
};
