import { Injectable } from '@angular/core';
import { AbsenceEleve, ContactEleve, CursusEleve, Eleve } from '../model/eleve-model';

@Injectable({ providedIn: 'root' })
export class EleveService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /** Ajout d'un contact à la liste des contacts de l'élève sélectionné */
    public ajouterUnContact(eleveSelectionne: Eleve | undefined): void {
        if (eleveSelectionne) {
            eleveSelectionne.contacts.push(new ContactEleve());
        }
    }

    /** Ajouter une ligne de cursus */
    public ajouterCursus(eleveSelectionne: Eleve | undefined): void {
        if (eleveSelectionne) {
            const nouveauCursus = new CursusEleve();
            nouveauCursus.annee = this.recupererAnneeSuivante(eleveSelectionne);
            eleveSelectionne.cursus.push(nouveauCursus);
        }
    }

    /** Ajout d'une absence à la liste des absences de l'élève sélectionné */
    public ajouterUneAbsence(eleveSelectionne: Eleve | undefined): void {
        if (eleveSelectionne) {
            if (!eleveSelectionne.absences) {
                eleveSelectionne.absences = [];
            }
            eleveSelectionne.absences.push(new AbsenceEleve());
        }
    }

    /** Ajout d'un élève et sélection automatique. */
    public ajouterUnEleve(eleves: Eleve[] | undefined | undefined): void {
        eleves?.push(new Eleve());
    }

    /** Extraction de l'année suivante des données de l'élève. */
    private recupererAnneeSuivante(eleve: Eleve): number {

        // par défaut
        let anneeSuivante = 1;

        // si un cursus existe, on en récupère l'année
        if (eleve.cursus && eleve.cursus.length > 0) {
            anneeSuivante = eleve.cursus[eleve.cursus.length - 1].annee + 1;
        }

        // si une date de naissance existe (de type DATE ou STRING)
        else if (eleve.dateNaissance) {
            if (eleve.dateNaissance instanceof Date) {
                anneeSuivante = eleve.dateNaissance.getFullYear();
            } else {
                anneeSuivante = parseInt(('' + eleve.dateNaissance).substring(0, 4));
            }
        }

        // renvoi de l'année
        return anneeSuivante;
    }

    /** Retrait de l'absence de la liste. */
    public supprimerAbsence(eleveSelectionne: Eleve | undefined, noAbsence: number): void {
        if (eleveSelectionne && eleveSelectionne.absences && eleveSelectionne.absences.length > noAbsence) {
            eleveSelectionne.absences.splice(noAbsence, 1);
        }
    }

    /** Retrait du contact de la liste. */
    public supprimerContact(eleveSelectionne: Eleve | undefined, noContact: number): void {
        if (eleveSelectionne && eleveSelectionne.contacts && eleveSelectionne.contacts.length > noContact) {
            eleveSelectionne.contacts.splice(noContact, 1);
        }
    }

    /** Retrait du cursus de la liste. */
    public supprimerCursus(eleveSelectionne: Eleve | undefined, noCursus: number): void {
        if (eleveSelectionne && eleveSelectionne.cursus && eleveSelectionne.cursus.length > noCursus) {
            eleveSelectionne.cursus.splice(noCursus, 1);
        }
    }

    /** Suppression de l'élève sélectionné */
    public supprimerEleveSelectionne(eleveSelectionne: Eleve | undefined, eleves: Eleve[] | undefined): void {
        if (eleves && eleveSelectionne) {
            const index = eleves.indexOf(eleveSelectionne);
            if (index !== -1) {
                eleves.splice(index, 1);
            }
        }
    }
}