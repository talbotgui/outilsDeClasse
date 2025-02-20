import { Injectable } from "@angular/core";
import { from, map, mergeMap, Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ChiffrementService {

    /** Instance de composant du navigateur */
    private encoder = new TextEncoder();

    /** Instance de composant du navigateur */
    private decoder = new TextDecoder();

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    private genererClef(motDePasse: string): Observable<CryptoKey> {
        // Encodage du mdp
        const mdpEncode = this.encoder.encode(motDePasse);

        const sel = Uint8Array.from({ length: 32 }, (v, k) => k);

        // Création d'une clef de base à partir du mot de passe
        return from(window.crypto.subtle.importKey('raw', mdpEncode, 'PBKDF2', false, ['deriveKey', 'deriveBits']))
            .pipe(
                mergeMap(key => from(crypto.subtle.deriveBits({ name: 'PBKDF2', salt: sel, iterations: 500000, hash: { name: 'SHA-256' } }, key, 256))),
                // Dérivation de la clef de base pour la rendre utilisable
                mergeMap(bits => from(window.crypto.subtle.importKey('raw', bits, { "name": "AES-GCM" }, false, ['encrypt', 'decrypt']))));
    }

    /**
     * Chiffrement d'une donnée.
     * @param donnee Donnée à chiffrer.
     * @param motDePasse Mot de passe à utiliser comme clef de chiffrement.
     * @returns La donnée chiffrée
     */
    public chiffrer(donnee: string, motDePasse: string): Observable<ArrayBuffer> {

        // Encodage de la donnée à chiffrer
        const donneeEncodee = this.encoder.encode(donnee);

        // Création d'un IV fixe
        const iv = Uint8Array.from({ length: 12 }, (v, k) => k);

        // Génération de la clef
        return this.genererClef(motDePasse).pipe(
            //Chiffrement
            mergeMap(clef => window.crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, clef, donneeEncodee))
        );
    }
    /**
     * Dechiffrement d'une donnée.
     * @param donneeChiffree Donnée chiffrée.
     * @param motDePasse Mot de passe à utiliser comme clef de chiffrement.
     * @returns La donnée déchiffrée
     */
    public dechiffrer(donneeChiffree: ArrayBuffer, motDePasse: string): Observable<string> {

        // Création d'un IV fixe
        const iv = Uint8Array.from({ length: 12 }, (v, k) => k);

        // Génération de la clef
        return this.genererClef(motDePasse).pipe(
            //Déchiffrement
            mergeMap(clef => window.crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, clef, donneeChiffree)),
            // Décodage
            map(donneesDechiffreEtEncode => this.decoder.decode(donneesDechiffreEtEncode))
        );
    }
}