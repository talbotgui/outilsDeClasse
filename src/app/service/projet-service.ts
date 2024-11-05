import { Injectable } from "@angular/core";
import { Periode } from "../model/model";
import { Projet, SousProjetParPeriode } from "../model/projet-model";

@Injectable({ providedIn: 'root' })
export class ProjetService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /** Ajout d'une compétence dans le sous-projet */
    public ajouterCompetence(sousProjet: SousProjetParPeriode, competence: any): void {
        if (competence !== undefined) {
            if (!sousProjet.idCompetences) {
                sousProjet.idCompetences = [];
            }
            sousProjet.idCompetences.push(competence.id);
        }
    }

    /** Ajout ou retrait d'un élève à un temps */
    public ajouterRetirerEleveAuProjet(projetSelectionne: Projet | undefined, idEleve: string): void {
        if (!projetSelectionne) {
            return;
        }
        if (!projetSelectionne.idsEleve) {
            projetSelectionne.idsEleve = [];
        }
        const index = projetSelectionne.idsEleve.indexOf(idEleve);
        if (index !== -1) {
            projetSelectionne.idsEleve.splice(index, 1);
        } else {
            projetSelectionne.idsEleve.push(idEleve);
        }
    }

    /** Ajout d'un projet */
    public ajouterUnProjet(projets: Projet[] | undefined): Projet {
        // Création du projet
        const nouveauProjet = new Projet();
        projets?.push(nouveauProjet);

        // Renvoi du nouveau projet
        return nouveauProjet;
    }

    /** Ajout d'un sous-projet */
    public ajouterUnSousProjet(projetSelectionne: Projet | undefined): void {
        // Création du sous-projet
        const ssProjet = new SousProjetParPeriode();
        projetSelectionne?.sousProjetParPeriode?.push(ssProjet);
    }

    /** Suppression de la compétence dans le sous-projet */
    public supprimerCompetence(sousLigne: SousProjetParPeriode, idCompetence: string): void {
        if (sousLigne && sousLigne.idCompetences) {
            const index = sousLigne.idCompetences.indexOf(idCompetence);
            if (index !== -1) {
                sousLigne.idCompetences.splice(index, 1);
            }
        }
    }

    /** Suppression du projet sélectionné. */
    public supprimerProjetSelectionne(projetSelectionne: Projet | undefined, projets: Projet[] | undefined): boolean {
        if (projetSelectionne && projets) {

            // Suppression du projet
            const index = projets.indexOf(projetSelectionne);
            if (index !== -1) {
                projets.splice(index, 1);
            }

            // MaJ Affichage
            return true;
        }

        // Pas de MaJ affichage
        return false;
    }

    /** Tri des lignes du projet */
    public trierLignes(projetSelectionne: Projet | undefined, periodes: Periode[] | undefined): void {
        if (projetSelectionne && projetSelectionne.sousProjetParPeriode) {
            projetSelectionne.sousProjetParPeriode.sort((sp1, sp2) => {
                if (sp1 && sp2 && sp1.idPeriode && sp2.idPeriode) {
                    const p1 = periodes?.find(p => p.id === sp1.idPeriode);
                    const p2 = periodes?.find(p => p.id === sp2.idPeriode);
                    if (p1 && p2 && p1.debut && p2.debut) {
                        return p1.debut.getTime() - p2.debut.getTime();
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            });
        }
    }
}