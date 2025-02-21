import { Injectable } from "@angular/core";
import Pako from "pako";
import { from, map, mergeMap, Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ChiffrementService {

    /** Sel utilisé dans le chiffrement */
    private static readonly SEL = Uint8Array.from({ length: 32 }, (v, k) => k);

    /** Création d'un IV fixe. */
    private static readonly IV = Uint8Array.from({ length: 12 }, (v, k) => k);

    /** Instance de composant du navigateur */
    private encodeur = new TextEncoder();

    /** Instance de composant du navigateur */
    private decodeur = new TextDecoder();

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /**
     * Chiffrement d'une donnée.
     * @param donnee Donnée à chiffrer.
     * @param motDePasse Mot de passe à utiliser comme clef de chiffrement.
     * @returns La donnée chiffrée
     */
    public chiffrerEtZipper(donnee: string, motDePasse: string): Observable<ArrayBuffer> {

        // Encodage de la donnée à chiffrer
        const donneeEncodee = this.encodeur.encode(donnee);

        // Génération de la clef
        return this.genererClef(motDePasse).pipe(
            //Chiffrement
            mergeMap(clef => window.crypto.subtle.encrypt({ name: "AES-GCM", iv: ChiffrementService.IV }, clef, donneeEncodee)),
            // Zip
            map(donneesChiffree => Pako.deflate(donneesChiffree, { level: 6, memLevel: 9 }))
        );
    }
    /**
     * Dechiffrement d'une donnée.
     * @param zip Donnée chiffrée.
     * @param motDePasse Mot de passe à utiliser comme clef de chiffrement.
     * @returns La donnée déchiffrée
     */
    public dezipperEtdechiffrer(zip: ArrayBuffer, motDePasse: string): Observable<string> {

        // Dezip
        const donneeChiffree = Pako.inflate(zip);

        // Génération de la clef
        return this.genererClef(motDePasse).pipe(
            // Déchiffrement
            mergeMap(clef => window.crypto.subtle.decrypt({ name: "AES-GCM", iv: ChiffrementService.IV }, clef, donneeChiffree)),
            // Décodage
            map(donneesDechiffreEtEncode => this.decodeur.decode(donneesDechiffreEtEncode))
        );
    }

    /**
     * Générer une clef de chiffrement/déchiffrement.
     * @param motDePasse Saisie de l'utilisateur à utiliser.
     * @returns Une clef.
     */
    private genererClef(motDePasse: string): Observable<CryptoKey> {
        // Encodage du mdp
        const mdpEncode = this.encodeur.encode(motDePasse);

        // Création d'une clef de base à partir du mot de passe
        return from(window.crypto.subtle.importKey('raw', mdpEncode, 'PBKDF2', false, ['deriveKey', 'deriveBits']))
            .pipe(
                mergeMap(key => from(crypto.subtle.deriveBits({ name: 'PBKDF2', salt: ChiffrementService.SEL, iterations: 500000, hash: { name: 'SHA-256' } }, key, 256))),
                // Dérivation de la clef de base pour la rendre utilisable
                mergeMap(bits => from(window.crypto.subtle.importKey('raw', bits, { "name": "AES-GCM" }, false, ['encrypt', 'decrypt']))));
    }
}