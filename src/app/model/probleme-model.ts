/**
 * Ce fichier contient toutes les classes MODEL liées à l'analyse des données de la classe et le traitement des problèmes.
 */

import { AvecIdentifiant } from "./model";

/** Structure d'un problème à traiter */
export class Probleme extends AvecIdentifiant {

    /** Constructeur */
    public constructor(
        /** Code d'erreur */
        public code: string,
        /** libelle complet du problème */
        public libelle: string,
        /** références à une donnée posant problème */
        public ids: (string | undefined)[] = []
    ) {
        super();
    }
}
