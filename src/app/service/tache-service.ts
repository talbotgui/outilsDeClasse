import { Injectable } from "@angular/core";
import { Echeance, Tache } from "../model/model";

@Injectable({ providedIn: 'root' })
export class TacheService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }


    /** Ajout d'une tâche */
    public ajouterTache(taches: Tache[]): Tache {
        // Création d'une tâche
        const nouvelleTache = new Tache();
        taches.push(nouvelleTache);

        // Création d'une première échance
        const nouvelleEcheance = new Echeance();
        nouvelleEcheance.date = new Date();
        nouvelleTache.echeances.push(nouvelleEcheance);

        // Tri des tâches
        this.trierTaches(taches);

        return nouvelleTache;
    }

    /** Ajout d'une échéance à une tâche. */
    public ajouterEcheance(tache: Tache): void {

        // Création d'une première échance
        const nouvelleEcheance = new Echeance();
        nouvelleEcheance.date = new Date();
        tache.echeances.push(nouvelleEcheance);

        // Tri des échéances
        this.trierEcheancesDuneTache(tache);
    }


    /** Tri des échéances des tâches. */
    public trierTaches(taches: Tache[] | undefined): void {
        (taches || []).sort((t1, t2) => {
            if (t1.echeances && t1.echeances[0] && t1.echeances[0].date && t2.echeances && t2.echeances[0] && t2.echeances[0].date) {
                return t1.echeances[0].date.getTime() - t2.echeances[0].date.getTime();
            } else {
                return -1;
            }
        });
    }

    /** Tri des échéances des tâches. */
    public trierEcheancesDuneTache(t: Tache): void {
        t.echeances.sort((e1, e2) => {
            const v1 = e1.termine + ' ' + e1.date?.getFullYear() + e1.date?.getMonth() + e1.date?.getDay();
            const v2 = e2.termine + ' ' + e2.date?.getFullYear() + e2.date?.getMonth() + e2.date?.getDay();
            return v1.localeCompare(v2);
        });
    }

    /** Supprimer l'échéance dans la tâche */
    public supprimerEcheance(tache: Tache, echeance: Echeance): void {
        if (tache && echeance) {
            const index = tache.echeances.indexOf(echeance);
            if (index !== -1) {
                tache.echeances.splice(index, 1);
            }
        }
    }

    /** Supprimer la tâche */
    public supprimerTache(tache: Tache, taches: Tache[] | undefined): void {
        if (taches && tache) {
            const index = taches.indexOf(tache);
            if (index !== -1) {
                taches.splice(index, 1);
            }
        }
    }
}