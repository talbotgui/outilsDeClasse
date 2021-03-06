import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { saveAs } from 'file-saver';
import { Observable, Subscriber } from 'rxjs';
import * as model from '../model/model';
import { DataRepository } from '../service/data.repository';


@Injectable()
export class SauvegardeService {

  private static dateDerniereSauvegardeDeLaSession: { message: string, date: Date };
  private static horsReseau: boolean = false;

  private readonly DELAI_SAUVEGARDE_AUTOMATIQUE = 300000;
  private readonly DELAI_MISE_EN_AVANT_BOUTON_SAUVEGARDE = 60000;
  private readonly URL_SERVEUR_HTTPS = 'http://192.168.1.52/download/upload.php';
  private readonly URL_SERVEUR_HTTP = 'http://192.168.1.52/download/upload.php';
  private readonly HEADERS_APPEL_SERVEUR = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  constructor(private http: HttpClient, private dataRepository: DataRepository, private snackBar: MatSnackBar, private ngZone: NgZone) { }

  metEnAvantLeBoutonSauvegarde(): void {
    if (!this.getDateDerniereSauvegardeDeLaSession()) {
      const boutonSauvegarde = document.getElementsByClassName('fa-save').item(0) as HTMLElement;
      if (boutonSauvegarde) {
        const classname = boutonSauvegarde.className;
        boutonSauvegarde.className = 'fa fa-save fa-2x faa-horizontal animated rappelSauvegarde';
        window.setTimeout(() => { boutonSauvegarde.className = classname; }, 5000);
      }
    }
  }

  getNomsDerniersFichiersSauvegardesDansBrowser(): { nomFichierEnLocal: string | null, nomFichierSurServeur: string | null } {
    if (typeof (Storage) !== 'undefined') {
      return {
        nomFichierEnLocal: window.localStorage.getItem('nomDernierFichierModifiĆ©EnLocal'),
        nomFichierSurServeur: window.localStorage.getItem('nomDernierFichierModifiĆ©SurServeur')
      };
    } else {
      return { nomFichierEnLocal: null, nomFichierSurServeur: null };
    }
  }

  getDateDerniereSauvegardeDeLaSession(): { message: string, date?: Date } {
    return SauvegardeService.dateDerniereSauvegardeDeLaSession;
  }

  travailleHorsReseau() {
    SauvegardeService.horsReseau = true;
  }

  /** RĆ©cupĆØre la liste des fichiers de sauvegarde disponibles sur le serveur */
  getlisteSauvegardesDuServeur(): Observable<{ fichiers: string[] }> {
    if (SauvegardeService.horsReseau) {
      return new Observable<{ fichiers: string[] }>((subscriber: Subscriber<{ fichiers: string[] }>) => subscriber.next({ fichiers: [] }));
    }
    const corp = 'methode=liste';
    const params = { headers: this.HEADERS_APPEL_SERVEUR };
    return this.http.post<{ fichiers: string[] }>(this.getUrlServeurDeDonnees(), corp, params);
  }

  /** Charge le contenu d'un fichier et l'envoie au service "dataService.setAnneeChargee" */
  chargeAnneeDuFichier(fichier: string): void {
    if (SauvegardeService.horsReseau) {
      return;
    }
    // Si le browser contient le nom du dernier fichier sauvegardĆ© et que le fichier sĆ©lectionnĆ© n'est pas le bon, demande de confirmation Ć  l'utilisateur
    if (!this.validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(fichier)) {
      return;
    }
    const corp = 'methode=charge&nomFichier=' + fichier;
    const params = { headers: this.HEADERS_APPEL_SERVEUR };
    this.http.post<model.Annee>(this.getUrlServeurDeDonnees(), corp, params).subscribe(
      (dataOk) => {

        // Sauvegarde de l'instance dans le service DataService
        this.dataRepository.setAnneeChargee(dataOk);

        // Notification
        const message = 'Fichier \'' + fichier + '\' chargĆ© depuis le serveur';
        this.snackBar.open(message, undefined, { duration: 3000 });

        // Pour mettre en avant le bouton de sauvegarde
        this.ngZone.runOutsideAngular(
          () => window.setInterval(() => this.ngZone.run(() => this.metEnAvantLeBoutonSauvegarde()), this.DELAI_MISE_EN_AVANT_BOUTON_SAUVEGARDE)
        );
      }
    );
  }

  /**
   * Parse le texte et l'envoie au service "dataService.setAnneeChargee"
   */
  chargeAnneeDepuisText(nomFichier: string, contenu: string): void {
    // Si le browser contient le nom du dernier fichier sauvegardĆ© et que le fichier sĆ©lectionnĆ© n'est pas le bon, demande de confirmation Ć  l'utilisateur
    if (!this.validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(nomFichier)) {
      return;
    }

    // Parse du JSON
    let objet: any;
    try {
      objet = JSON.parse(contenu);
    } catch (error) {
      console.error(error);
      const messageErreur = 'ERREUR dans les donnĆ©es du fichier\'' + nomFichier + '\' (taper F12 pour en savoir plus)';
      this.snackBar.open(messageErreur, undefined, { duration: 30000 });
      return;
    }

    // Sauvegarde de l'instance dans le service DataService
    this.dataRepository.setAnneeChargee(objet);

    // notification
    const message = 'DonnĆ©es chargĆ©es depuis le fichier local \'' + nomFichier + '\'';
    this.snackBar.open(message, undefined, { duration: 3000 });

    // Pour mettre en avant le bouton de sauvegarde
    this.ngZone.runOutsideAngular(
      () => window.setInterval(() => this.ngZone.run(() => this.metEnAvantLeBoutonSauvegarde()), this.DELAI_MISE_EN_AVANT_BOUTON_SAUVEGARDE)
    );
  }

  /**
   * Execution de la sauvegarde par tĆ©lĆ©chargement et dĆ©marrage de cette mĆŖme sauvegarde Ć  un rythme rĆ©gulier
   */
  sauvegardeAnneeParTelechargement(): void {
    // Mise en place de la sauvegarde automatique
    if (!this.getDateDerniereSauvegardeDeLaSession()) {
      window.setInterval(() => this.sauvegardeAnneeParTelechargementExecution(), this.DELAI_SAUVEGARDE_AUTOMATIQUE);
    }

    // Execution de la sauvegarde
    this.sauvegardeAnneeParTelechargementExecution();
  }

  /**
   * Execution de la sauvegarde sur le serveur et dĆ©marrage de cette mĆŖme sauvegarde Ć  un rythme rĆ©gulier
   */
  sauvegardeAnneeSurServeur(): void {
    // Mise en place de la sauvegarde automatique
    if (!this.getDateDerniereSauvegardeDeLaSession()) {
      window.setInterval(() => this.sauvegardeAnneeSurServeurExecution(), this.DELAI_SAUVEGARDE_AUTOMATIQUE);
    }
    // Execution de la sauvegarde
    this.sauvegardeAnneeSurServeurExecution();
  }

  /** Si le browser contient le nom du dernier fichier sauvegardĆ© et que le fichier sĆ©lectionnĆ© n'est pas le bon, demande de confirmation Ć  l'utilisateur */
  private validationEtConfirmationSiFichierNestPasLeDernierSauvegardeDansBrowser(nomFichier: string) {
    const dernierNomFichier = this.getNomsDerniersFichiersSauvegardesDansBrowser();

    // Si le fichier chargĆ© n'est pas le dernier sauvegardĆ©, demande de confirmation
    const uneSauvegardeExiste = !!dernierNomFichier.nomFichierEnLocal || !!dernierNomFichier.nomFichierSurServeur;
    const estLeDernierFichierLocal = !!dernierNomFichier.nomFichierEnLocal && dernierNomFichier.nomFichierEnLocal === nomFichier;
    const estLeDernierFichierServeur = !!dernierNomFichier.nomFichierSurServeur && dernierNomFichier.nomFichierSurServeur === nomFichier;
    if (uneSauvegardeExiste && !estLeDernierFichierLocal && !estLeDernierFichierServeur) {
      return confirm('Le fichier que vous souhaitez chargĆ© n\'est pas le dernier sauvegardĆ© dans ce browser. Souhaitez tout de mĆŖme le charger ?');
    }

    // Sinon, pas de soucis
    else {
      return true;
    }
  }

  // PrĆ©pare la sauvegarde et calcul le nom du fichier de sauvegarde
  private prepareSauvegardeEtCalculNomFichier(): string {

    // Mise Ć  jour de la date de derniĆØre modification
    const date = new Date();
    this.dataRepository.getAnneeChargee().dateDerniereSauvegarde = date;

    // Ajout des donnĆ©es de type si manquante (usage d'un fichier de donnĆ©es d'une annĆ©e prĆ©cĆ©dente)
    if (!this.dataRepository.getAnneeChargee().mapTypeContact) {
      this.dataRepository.getAnneeChargee().mapTypeContact = { P: "PĆØre", M: "MĆØre", S: "Structure", F: "Famille d'accueil", A: "Autre" };
    }
    if (!this.dataRepository.getAnneeChargee().mapRaisonAbsence) {
      this.dataRepository.getAnneeChargee().mapRaisonAbsence = { I: "Inclusion", O: "Orthophoniste", PM: "PsychomotricitĆ©", P: "Psychologue", A: "Autre" };
    }

    // Calcul du nom du fichier
    const y = date.getFullYear();
    const mo = (date.getMonth() + 1).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
    const d = (date.getDate()).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
    const h = (date.getHours()).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
    const mi = (date.getMinutes()).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
    const s = (date.getSeconds()).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });

    return y + '-' + mo + '-' + d + '-' + h + 'h' + mi + 'm' + s + 's.json';
  }

  // Transforme une copie des donnĆ©es en cours en JSON
  private transformeAnneeEnJson(): string {

    // Clone de la structure avant modification pour sauvegarde
    const anneeAsauvegarder = Object.assign({}, this.dataRepository.getAnneeChargee());

    // Suppression des Map recalculĆ©es
    delete anneeAsauvegarder.mapLibelleNotesMap;
    delete anneeAsauvegarder.mapLibelleStatutEleveMap;
    delete anneeAsauvegarder.mapRaisonAbsenceMap;
    delete anneeAsauvegarder.mapTypeContactMap;

    return JSON.stringify(anneeAsauvegarder, null, 2);
  }

  /**
   * Sauvegarde sur le serveur distant le contenu de l'annĆ©e en cours d'Ć©dition.
   */
  private sauvegardeAnneeSurServeurExecution(): void {
    // Pas de sauvegarde rĆ©seau si horsReseau
    if (SauvegardeService.horsReseau) {
      return;
    }

    // Stockage de la date de sauvegarde
    SauvegardeService.dateDerniereSauvegardeDeLaSession = { message: 'SauvegardĆ© sur le serveur Ć  ', date: new Date() };

    // PrĆ©paration des donnĆ©es
    const nomFichier = this.prepareSauvegardeEtCalculNomFichier();
    const contenuFichier = this.transformeAnneeEnJson();

    // PrĆ©paration des paramĆØtres
    const params = new HttpParams()
      .append('methode', 'sauvegarde')
      .append('nomFichier', nomFichier)
      .append('contenuFichier', contenuFichier);

    // ProblĆØme d'encodage des caractĆØres '+'
    const paramsSansBug = params.toString().replace(/\+/g, '%2B');

    // Post
    this.http.post<model.Annee>(this.getUrlServeurDeDonnees(), paramsSansBug, { headers: this.HEADERS_APPEL_SERVEUR }).subscribe(
      (dataOk) => {
        // Sauvegarde du nom du fichier dans le browser
        this.storeNomDernierFichierSauvegardeDansBrowser(nomFichier, true);
        // Notifications
        const message = 'DonnĆ©es sauvegardĆ©es sur le serveur dans le fichier \'' + nomFichier + '\'';
        this.snackBar.open(message, undefined, { duration: 3000 });
        // Changement de l'icone
        const elements = document.getElementsByClassName('fa-save');
        if (elements && elements.length > 0) {
          const el = elements.item(0);
          if (el) {
            el.className += ' sauvegardeDejaFaite';
          }
        }
      },
      (error: HttpErrorResponse) => {
        const message = 'Erreur durant la sauvegarde : {statut=' + error.status + ', message=' + error.message + '}';
        this.snackBar.open(message, undefined, { duration: 3000 });
      }
    );
  }

  /**
   * GĆ©nĆ©ration d'un objet contenant le nom du fichier et le blob Ć  faire tĆ©lĆ©charger dans le navigateur
   */
  private sauvegardeAnneeParTelechargementExecution(): void {
    // Stockage de la date de sauvegarde
    SauvegardeService.dateDerniereSauvegardeDeLaSession = { message: 'SauvegardĆ© par tĆ©lĆ©chargement Ć  ', date: new Date() };

    // PrĆ©paration des donnĆ©es
    const nomDuFichier = this.prepareSauvegardeEtCalculNomFichier();
    const contenuFichier = this.transformeAnneeEnJson();
    const leBlob = new Blob([contenuFichier], { type: 'text/plain;charset=utf-8' });
    const resultat = { nomFichier: nomDuFichier, blob: leBlob };

    // Sauvegarde du nom du fichier dans le browser
    this.storeNomDernierFichierSauvegardeDansBrowser(nomDuFichier, false);

    // Appel Ć  saveAs pour dĆ©clencher le tĆ©lĆ©chargement dans le navigateur
    saveAs(resultat.blob, resultat.nomFichier);

    // notification
    const message = 'DonnĆ©es sauvegardĆ©es par tĆ©lĆ©chargement';
    this.snackBar.open(message, undefined, { duration: 3000 });
    const elements = document.getElementsByClassName('fa-save');

    // Changement de l'icone
    if (elements && elements.length > 0) {
      const el = elements.item(0);
      if (el) {
        el.className += ' sauvegardeDejaFaite';
      }
    }

  }

  private storeNomDernierFichierSauvegardeDansBrowser(value: string, surServeur: boolean) {
    if (typeof (Storage) !== 'undefined') {
      if (surServeur) {
        return window.localStorage.setItem('nomDernierFichierModifiĆ©SurServeur', value);
      } else {
        return window.localStorage.setItem('nomDernierFichierModifiĆ©EnLocal', value);
      }
    } else {
      return null;
    }
  }

  private getUrlServeurDeDonnees(): string {
    // Sous Chrome, il est prĆ©fĆ©rable d'utiliser l'adresse HTTP pour faire s'afficher le warning du contenu mixte et l'autoriser
    // if (!!(window as any).chrome) {
    // return this.URL_SERVEUR_HTTP;
    // } else {
    return this.URL_SERVEUR_HTTPS;
    // }
  }
}
