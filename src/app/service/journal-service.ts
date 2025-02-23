import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve-model';
import { GroupeSurUnTemps, Journal, Temps } from '../model/journal-model';
import { MessageAafficher, TypeMessageAafficher } from '../model/message-model';
import { ContexteService } from './contexte-service';
import { DateService } from './date-service';

@Injectable({ providedIn: 'root' })
export class JournalService {

    /** Constructeur pour injection des dépendances. */
    constructor(private contexteService: ContexteService, private datePipe: DatePipe, private dateService: DateService) { }

    /** Ajout d'un nouveau groupe dans le temps pointé avec les élèves non sélectionnés dans les autres groupes du temps. */
    public ajouterGroupe(journal: Journal | undefined, eleves: Eleve[] | undefined, i: number): void {
        if (journal && journal.temps && i < journal.temps.length && journal.temps[i]) {
            const idElevesDejaDansDautresGroupes = journal.temps[i].groupes.flatMap(g => g.eleves);
            const nouveauGroupe = new GroupeSurUnTemps();
            nouveauGroupe.eleves = (eleves || []).map(e => e.id).filter(id => idElevesDejaDansDautresGroupes.indexOf(id) === -1);
            journal.temps[i].groupes.push(nouveauGroupe);
        }
    }

    /** Ajout ou retrait d'un élève à un temps */
    public ajouterRetirerEleveAuGroupeDunTemps(journal: Journal | undefined, t: number, g: number, idEleve: string): void {
        if (!journal || !journal.temps || t >= journal.temps.length) {
            return;
        }
        const temps = journal.temps[t];
        if (!temps || !temps.groupes || g >= temps.groupes.length) {
            return;
        }
        const groupe = temps.groupes[g];
        if (!groupe.eleves) {
            groupe.eleves = [];
        }
        const index = groupe.eleves.indexOf(idEleve);
        if (index !== -1) {
            groupe.eleves.splice(index, 1);
        } else {
            groupe.eleves.push(idEleve);
        }
    }

    /** Ajout d'un temps d'un type précis après le temps passé en index */
    public ajouterTempsApres(journal: Journal | undefined, i: number, type: string): boolean {
        if (journal && journal.temps && i < journal.temps.length) {

            // Ajout du temps au bon endroit
            const temps = new Temps();
            journal.temps.splice(i + 1, 0, temps);

            // Initialisation des attributs communs à tous les types
            temps.type = type;

            // Initialisation des attributs par type
            if (type === 'classe') {
                // un groupe par défaut
                temps.groupes = [new GroupeSurUnTemps()];

                // Copie de l'heure de fin du temps précédent
                if (i >= 0 && journal.temps[i] && journal.temps[i].fin) {
                    temps.debut = journal.temps[i].fin;
                } else if (i >= 1 && journal.temps[i - 1] && journal.temps[i - 1].fin) {
                    temps.debut = journal.temps[i - 1].fin;
                }

                // Si l'affichage doit être modifié
                return true;
            }
        }

        // Si l'affichage doit resté inchangé
        return false;
    }

    /** Fonction de manipulation de données */
    private clonerGroupeSurUnTemps(g: GroupeSurUnTemps): GroupeSurUnTemps {
        const nouveauGroupe = new GroupeSurUnTemps();
        nouveauGroupe.commentaire = g.commentaire;
        nouveauGroupe.competences = g.competences.slice();
        nouveauGroupe.eleves = g.eleves.slice();
        nouveauGroupe.nom = g.nom;
        nouveauGroupe.consignes = g.consignes;
        nouveauGroupe.materiel = g.materiel;
        nouveauGroupe.objectifs = g.objectifs;
        return nouveauGroupe;
    }

    /** Fonction de manipulation de données */
    private clonerTemps(t: Temps): Temps {
        const nouveauTemps = new Temps();
        nouveauTemps.debut = t.debut;
        nouveauTemps.fin = t.fin;
        nouveauTemps.type = t.type;
        nouveauTemps.groupes = (t.groupes || []).map(this.clonerGroupeSurUnTemps.bind(this));
        return nouveauTemps;
    }

    /** Création d'un journal */
    private creerJournal(dateJournal: Date, eleves: Eleve[] | undefined, mapRaisonAbsence: { [key: string]: string } | undefined): Journal {

        // Ajout d'un nouveau journal pour la date sélectionnée
        const nouveauJournal = new Journal();
        nouveauJournal.date = dateJournal;

        // Gestion du commentaire de journal par défaut
        let commentaireJournalParDefaut = '';
        (eleves || []).forEach(e => {
            if (e.statut === Eleve.CODE_STATUT_DANS_LA_CLASSE && e.absences) {
                e.absences.forEach(a => {
                    const numeroSemaine = parseInt(this.datePipe.transform(dateJournal, 'ww') as string, 10);
                    const verifFrequence = (typeof a.frequence === 'undefined' || a.frequence === 2) || (numeroSemaine % 2 === a.frequence);
                    if (a.jour === dateJournal?.getDay() && verifFrequence && mapRaisonAbsence) {
                        const raison = a.raison ? mapRaisonAbsence[a.raison] : '';
                        commentaireJournalParDefaut += '<li>' + e.prenom + ' : ' + raison + ' de ' + a.heureDebut + ' à ' + a.heureFin + '</li>';
                    }
                })
            }
        })
        if (commentaireJournalParDefaut.length > 0) {
            commentaireJournalParDefaut = '<ul>' + commentaireJournalParDefaut + '</ul><br/>';
        }
        nouveauJournal.remarque = commentaireJournalParDefaut;

        return nouveauJournal;
    }

    /** Déplacer un temps dans le journal */
    public descendreTemps(journal: Journal | undefined, i: number): boolean {
        if (journal && journal.temps && i < journal.temps.length) {

            // Déplacement du temps
            const temps = journal.temps[i];
            journal.temps[i] = journal.temps[i + 1];
            journal.temps[i + 1] = temps;

            return true;
        }
        return false;
    }

    /** Duplication du journal pour l'ajouter avec la date cible. */
    public dupliquerJournal(journal: Journal, journalCible: Journal): void {
        // Si le journal n'est pas vide, on ne peut pas dupliquer
        if (journalCible.temps && journalCible.temps.length > 0) {
            const message = new MessageAafficher('dupliquerJournal', TypeMessageAafficher.Avertissement, 'Des temps sont présents dans le journal du ' + this.dateService.formaterDate(journal.date, true) + '.');
            this.contexteService.afficherUnMessageGeneral(message);
            return;
        }

        journalCible.remarque = 'Duplication du journal du ' + this.dateService.formaterDate(journal.date, true) + '<br/>' + journal.remarque;
        journalCible.temps = (journal.temps || []).map(this.clonerTemps.bind(this));
    }

    /** Duplication du temps et ajout au journal de la date cible */
    public dupliquerTemps(temps: Temps, journalCible: Journal): void {
        // Ajout du temps dupliqué
        if (!journalCible.temps) {
            journalCible.temps = [];
        }
        journalCible.temps.push(this.clonerTemps(temps));
    }

    /** Déplacer un temps dans le journal. */
    public monterTemps(journal: Journal | undefined, i: number): boolean {
        if (journal && journal.temps && i < journal.temps.length) {

            // Déplacement du temps
            const temps = journal.temps[i];
            journal.temps[i] = journal.temps[i - 1];
            journal.temps[i - 1] = temps;

            // MaJ affichage
            return true;
        }

        // Pas de MaJ affichage
        return false;
    }

    /** Recherche d'un journal existant */
    public rechercherJournal(journaux: Journal[], dateJournal: Date): Journal | undefined {
        const time = dateJournal.getTime();
        return journaux?.find(j => j.date?.getTime() === time);
    }

    /** Création d'un nouveau journal pour cette date */
    public rechercherOuCreerJournal(journaux: Journal[], dateJournal: Date, eleves: Eleve[], mapRaisonAbsence: { [key: string]: string } | undefined): Journal | undefined {

        // Si pas de date, pas de journal
        if (!dateJournal) {
            return undefined;
        }
        // Recherche du journal
        const journal = this.rechercherJournal(journaux, dateJournal);
        if (journal) {
            return journal;
        }

        const nouveauJournal = this.creerJournal(dateJournal, eleves, mapRaisonAbsence);
        journaux?.push(nouveauJournal);

        return nouveauJournal;
    }

    /** Suppression d'une compétence. */
    public supprimerCompetence(groupe: GroupeSurUnTemps, idCompetence: string): void {
        if (groupe && idCompetence) {
            const index = groupe.competences.indexOf(idCompetence);
            groupe.competences.splice(index, 1);
        }
    }

    /** Suppression du groupe dans le temps */
    public supprimerGroupe(journal: Journal | undefined, t: number, g: number): void {
        if (!journal || !journal.temps || t >= journal.temps.length) {
            return;
        }
        const temps = journal.temps[t];
        if (!temps || !temps.groupes || g >= temps.groupes.length) {
            return;
        }
        temps.groupes.splice(g, 1);
    }

    /** Suppression du journal */
    public supprimerJournal(journal: Journal | undefined, journaux: Journal[] | undefined): boolean {
        if (journal && journaux) {

            // Suppression
            const index = journaux.indexOf(journal);
            if (index !== -1) {
                journaux.splice(index, 1);
            }

            // Ménage dans les flags et données du composant
            journal = undefined;

            // MaJ affichage
            return true;
        }

        // Pas de MaJ affichage
        return false;
    }

    /** Supprimer un temps */
    public supprimerTemps(journal: Journal | undefined, i: number): boolean {

        // Suppression
        let majAffichage = false;
        if (journal && journal.temps && i < journal.temps.length) {
            journal.temps.splice(i, 1);
            majAffichage = true;
        }

        // Si le journal est vide, création d'un temps par défaut
        if (journal?.temps.length === 0) {
            this.ajouterTempsApres(journal, -1, 'classe');
        }

        // MaJ affichage ou non
        return majAffichage;
    }
}