/**
 * Ce fichier contient toutes les classes MODEL liées à l'analyse des données de la classe et le traitement des problèmes.
 */

import { AvecIdentifiant } from "./model";

/** Structure d'un problème à traiter */
export abstract class Probleme extends AvecIdentifiant {

    /** Statut de résolution */
    public resolu: boolean = false;

    /** Flag affichant les détails */
    public detailsAffiches: boolean = false;

    /** Constructeur */
    public constructor(
        /** Code d'erreur */
        public code: string,
        /** Libelle court du problème */
        public libelle: string,
        /** Libelle long du problème */
        public details: string[]
    ) {
        super();
    }

    /** Flag indiquant que le problème est solutionnable facilement (pas de instanceof possible dans une page HTML) */
    public abstract estCorrigeableAutomatiquement(): boolean;


    /** Récupération du libellé du bouton ou de l'explication à afficher (pas de instanceof possible dans une page HTML) */
    public abstract recupererLibelleAutiliser(): string;
}

/** Structure d'un problème dont la correction est automatisable */
export class ProblemeAvecCorrectionAutomatique extends Probleme {

    /** Constructeur */
    public constructor(
        /** Données de la classe parente */
        code: string,
        /** Données de la classe parente */
        libelle: string,
        /** Données de la classe parente */
        details: string[],
        /** Références à une donnée posant problème */
        public libelleBouton: string,
        /** Références à une donnée posant problème */
        public ids: (string | undefined)[] = [],
    ) {
        super(code, libelle, details);
    }

    /** Cf. classe parente */
    public estCorrigeableAutomatiquement(): boolean {
        return true;
    }

    /** Cf. classe parente */
    public recupererLibelleAutiliser(): string {
        return this.libelleBouton;
    }
}

/** Structure d'un problème dont la correction est automatisable */
export class ProblemeAvecCorrectionManuelle extends Probleme {

    /** Constructeur */
    public constructor(
        /** Données de la classe parente */
        code: string,
        /** Données de la classe parente */
        libelle: string,
        /** Données de la classe parente */
        details: string[],
        /** Message expliquant la correction */
        public explications: string
    ) {
        super(code, libelle, details);
    }

    /** Cf. classe parente */
    public estCorrigeableAutomatiquement(): boolean {
        return false;
    }

    /** Cf. classe parente */
    public recupererLibelleAutiliser(): string {
        return this.explications;
    }
}