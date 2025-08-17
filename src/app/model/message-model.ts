/**
 * Ce fichier contient toutes les classes MODEL liées à l'affichage de message en entête de page.
 */

import { ModelUtil } from "./model-utils";

/** Liste des types de message affichable */
export enum TypeMessageAafficher {
    Erreur, Avertissement, Information
}

/** Structure d'un message à afficher */
export class MessageAafficher {
    /** Génération d'un ID unique. */
    public id = ModelUtil.getUID();
    /** Constructeur */
    public constructor(
        /** ID de l'emetteur (pour supprimer le message ensuite) */
        public codeEmetteurDuMessage: string = '',
        /** Type de message */
        public type: TypeMessageAafficher,
        /** Contenu du message */
        public message: string) {
    }

    /** Vérification du niveau du message : Information */
    public get isInformation(): boolean { return this.type === TypeMessageAafficher.Information; }
    /** Vérification du niveau du message : Avertissement */
    public get isAvertissement(): boolean { return this.type === TypeMessageAafficher.Avertissement; }
    /** Vérification du niveau du message : Erreur */
    public get isErreur(): boolean { return this.type === TypeMessageAafficher.Erreur; }
}

