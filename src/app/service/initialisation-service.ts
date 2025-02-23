import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve-model';
import { Annee } from '../model/model';
import { Projet } from '../model/projet-model';

@Injectable({ providedIn: 'root' })
export class InitialisationService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /** Ajout d'une liste de choix */
    public creerChoixParEleve(donnees: Annee): { eleve: Eleve, choix: 'suppression' | 'vidange' | undefined }[] {

        // Création de la liste des choix
        const choixParEleve = (donnees?.eleves || []).map(eleve => {
            return { eleve: eleve, choix: undefined };
        });

        return choixParEleve;
    }

    /** Ajout d'une liste de choix */
    public creerChoixParProjet(donnees: Annee): { projet: Projet, choix: 'suppression' | undefined }[] {

        // Création de la liste des choix
        const choixParProjet = (donnees?.projets || []).map(projet => {
            return { projet: projet, choix: undefined };
        });

        return choixParProjet;
    }

    /** Nettoyage de la liste des élèves */
    public traiterChoixParEleve(choixParEleve: { eleve: Eleve; choix: "suppression" | "vidange" | undefined; }[], donnees: Annee): void {

        // Pour chaque choix
        choixParEleve.forEach(c => {
            // Suppression de l'élève
            if (c.choix === 'suppression') {
                const index = donnees.eleves.indexOf(c.eleve);
                donnees.eleves.splice(index, 1);
            }
            // Purge des notes de l'élève
            else if (c.choix === 'vidange') {
                c.eleve.notes = [];
            }
        });
    }

    /** Nettoyage de la liste des projets */
    public traiterChoixParProjet(choixParProjet: { projet: Projet; choix: "suppression" | undefined; }[], donnees: Annee): void {

        // Pour chaque choix
        choixParProjet.forEach(c => {
            // Suppression du projet
            if (c.choix === 'suppression') {
                const index = donnees.projets.indexOf(c.projet);
                donnees.projets.splice(index, 1);
            }
        });
    }
}