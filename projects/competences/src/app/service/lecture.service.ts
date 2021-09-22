import { Injectable } from '@angular/core';
import * as model from '../model/model';
import { DataRepository } from './data.repository';


@Injectable()
export class LectureService {

  /** Données de cache utilisées pour ne pas parcourir anneeChargee constamment */
  private cacheMapCompetence: Map<string, model.Competence> = new Map<string, model.Competence>();
  private cacheMapLibelleCompletCompetence: Map<string, string> = new Map<string, string>();
  private cacheMapListeCompetencesEnfant: Map<string, model.Competence[]> = new Map<string, model.Competence[]>();

  constructor(private dataRepository: DataRepository) { }

  /**
   * Obtenir une compétence par sa date.
   */
  getCompetence(idCompetence: string): model.Competence | undefined {
    // Tentative par le cache
    if (this.cacheMapCompetence.has(idCompetence)) {
      return this.cacheMapCompetence.get(idCompetence);
    }

    // Recherche, mise en cache et renvoie
    for (const c of this.dataRepository.getAnneeChargee().competences) {
      if (c.id === idCompetence) {
        this.cacheMapCompetence.set(idCompetence, c);
        return c;
      }
    }

    // Sinon
    return undefined;
  }

  /**
   * Calcul le libellé de la compétence à partir de son ID.
   * Si idCompetenceRacine est précisé, le libellé commence à cette compétence
   */
  getLibelleCompletCompetence(idCompetence: string, idCompetenceRacine?: string): string {

    // Recherche dans le cache
    const clefCache = idCompetence + idCompetenceRacine;
    const valeurCache = this.cacheMapLibelleCompletCompetence.get(clefCache);
    if (valeurCache) {
      return valeurCache;
    }

    // Si une année est chargée
    let libelle = '';
    const competences = this.dataRepository.getAnneeChargee().competences;

    // Calcul
    let idCompetenceEnfant = idCompetence;
    for (let i = competences.length - 1; i !== -1; i--) {
      if (competences[i].id === idCompetenceRacine) {
        break;
      } else if (competences[i].id === idCompetenceEnfant) {
        libelle = competences[i].text + ' > ' + libelle;
        idCompetenceEnfant = competences[i].parent as string;
      }
    }
    libelle = libelle.substr(0, libelle.length - 3);

    // Mise en cache
    this.cacheMapLibelleCompletCompetence.set(idCompetence + idCompetenceRacine, libelle);

    // Renvoi
    return libelle;
  }

  getAncetresCompetence(idCompetence: string): model.Competence[] {
    const resultat: model.Competence[] = [];
    const competences = this.dataRepository.getAnneeChargee().competences;
    let idCompetenceEnfant = idCompetence;
    for (let i = competences.length - 1; i !== -1; i--) {
      if (competences[i].id === idCompetenceEnfant) {
        resultat.push(competences[i]);
        idCompetenceEnfant = competences[i].parent as string;
      }
    }
    return resultat;
  }

  /** Recherche des compétences "enfants" d'une compétence */
  getListeCompetencesEnfant(idCompetence: string): model.Competence[] {

    // Utilisation du cache
    const valeurCache = this.cacheMapListeCompetencesEnfant.get(idCompetence);
    if (valeurCache) {
      return valeurCache;
    }

    // Si l'année est là, recherche, cache et renvoie
    const liste = [];
    for (const competence of this.dataRepository.getAnneeChargee().competences) {
      if (competence.parent === idCompetence) {
        liste.push(competence);
      }
    }
    this.cacheMapListeCompetencesEnfant.set(idCompetence, liste);
    return liste;
  }

  /** Donne la liste complète des compétences */
  getListeCompetence(): model.Competence[] {
    return this.dataRepository.getAnneeChargee().competences;
  }


  /** Retourne une Map <idCompetence Competence> de toutes les compétences existantes */
  getMapCompetences(): Map<string, model.Competence> {
    const annee = this.dataRepository.getAnneeChargee();
    if (this.cacheMapCompetence.size === annee.competences.length) {
      return this.cacheMapCompetence;
    }

    const laMap: Map<string, model.Competence> = new Map<string, model.Competence>();
    for (const competence of annee.competences) {
      laMap.set(competence.id as string, competence);
    }
    return laMap;
  }

  getCompetenceParTexte(recherche: string | undefined, idCompetenceRacine?: string): model.Competence[] {
    const resultats: model.Competence[] = [];
    if (recherche) {
      const mots = recherche.toUpperCase().split(' ');
      const listeDesParents: string[] = [];
      if (idCompetenceRacine) {
        listeDesParents.push(idCompetenceRacine);
      }
      for (const c of this.getListeCompetence()) {
        if (idCompetenceRacine && c.parent) {
          if (listeDesParents.indexOf(c.parent) === -1) {
            continue;
          } else if (c.id) {
            listeDesParents.push(c.id);
          }
        }
        if (c.text && this.compareLibelleCompetencePourRecherche(c.text.toLocaleUpperCase(), mots)) {
          resultats.push(c);
        }
      }
    }
    return resultats;
  }

  /**
   * Compare une expression recherchée avec un libellé de compétence.
   * @param libelle Le libellé de la compétence (en majuscule)
   * @param mots Les mots de l'expression recherchée (en majuscule)
   */
  compareLibelleCompetencePourRecherche(libelle: string, mots: string[]): boolean {
    let valide = true;
    if (libelle) {
      for (const mot of mots) {
        valide = valide && libelle.indexOf(mot) !== -1;
      }
    }
    return valide;
  }
}
