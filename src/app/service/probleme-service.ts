import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MessageAafficher, TypeMessageAafficher } from '../model/message-model';
import { Annee } from '../model/model';
import { Note } from '../model/note-model';
import { Probleme, ProblemeAvecCorrectionAutomatique, ProblemeAvecCorrectionManuelle } from '../model/probleme-model';
import { ContexteService } from './contexte-service';

@Injectable({ providedIn: 'root' })
export class ProblemeService {

    /** Constructeur pour injection des dépendances. */
    constructor(private contexteService: ContexteService, private datePipe: DatePipe) { }

    /** Méthode d'analyse des données après le chargement pour lister les problèmes */
    public analyserDonnees(donnees: Annee): void {

        // Initialisation de la liste des problèmes
        const problemes: Probleme[] = [];

        // Analyse des références croisées simples
        this.analyserLesReferencesSimples(donnees, problemes);

        // Analyse des données des projets et recherche des notes associées (présentes et projet bien référencé)
        this.analyserLesProjets(donnees, problemes);

        // Tri des problèmes
        problemes.sort((a, b) => (a.code + a.libelle).localeCompare(b.code + b.libelle));

        // Publication de la liste des problèmes
        this.contexteService.declarerDesProblemesDeDonnees(problemes);

        // Si des problèmes sont détectés
        if (problemes.length > 0) {

            // Ajout d'un message
            this.contexteService.afficherUnMessageGeneral(new MessageAafficher('analyserDonnees', TypeMessageAafficher.Avertissement, 'Le fichier de données contient ' + problemes.length + ' problèmes. Utilisez l\'onglet \'Problèmes\' pour les résoudre.'));
        }
    }

    /** Analyse des projets présents dans les données */
    private analyserLesProjets(donnees: Annee, problemes: Probleme[]): void {
        if (donnees && donnees.projets && donnees.eleves) {
            donnees.projets.forEach(p => {
                p.idsEleve?.forEach(idEleve => {
                    const e = donnees.eleves.find(e2 => e2.id === idEleve);

                    // Eleve non trouvé
                    if (!e) {
                        const libelle = 'L\'élève \'' + idEleve + '\' n\'est pas présent dans les données mais est référencé dans le projet \'' + p.nom + '\'';
                        const details = ['Projet :\'' + p.nom + '\'', 'Identifiant élève : \'' + idEleve + '\''];
                        const libelleBouton = 'Supprimer la référence';
                        problemes.push(new ProblemeAvecCorrectionAutomatique('PRO3', libelle, details, libelleBouton, [p.id, idEleve]));
                    }

                    // Eleve trouvé
                    else {

                        // Recherche de la note pour chaque sousProjet et chaque compétence
                        p.sousProjetParPeriode?.forEach(sp => {
                            sp.idCompetences?.forEach(idCompetence => {
                                const indexNoteTrouve = e.notes.findIndex(n2 => n2.idItem === idCompetence && n2.idPeriode === sp.idPeriode)

                                // Si la note n'est pas trouvée, problème
                                if (indexNoteTrouve === -1) {
                                    const periode = donnees.periodes.find(p2 => p2.id === sp.idPeriode);
                                    const competence = donnees.competences.find(c => c.id === idCompetence);
                                    const libelle = 'L\'élève \'' + e.prenom + '\' est associé au projet \'' + p.nom + '\' mais n\'a pas de note pour une compétence prévue (compétence supprimée entre temps ?).';
                                    const details = ['Compétence : ' + competence?.text, 'Période : ' + periode?.nom];
                                    const libelleBouton = 'Créer la note';
                                    problemes.push(new ProblemeAvecCorrectionAutomatique('PRO4', libelle, details, libelleBouton, [e.id, periode?.id, p.id, idCompetence]));
                                    return;
                                }

                                // Sinon si la note n'a pas l'ID du projet dans ses références
                                const n = e.notes[indexNoteTrouve];
                                if (!n.idsProjets?.includes(p.id)) {
                                    const periode = donnees.periodes.find(p2 => p2.id === sp.idPeriode);
                                    const competence = donnees.competences.find(c => c.id === idCompetence);
                                    const evaluation = donnees.mapLibelleNotes[n.valeurEvaluation || ''];
                                    const libelle = 'Une note de l\'élève \'' + e.prenom + '\' ne référence pas le projet \'' + p.nom + '\'.';
                                    const details = ['Eleve : ' + e.prenom + ' ' + e.nom, 'Date création de la note : ' + this.datePipe.transform(n.dateCreation, 'dd/MM/yyyy'), 'Période : ' + periode?.nom, 'Compétence : ' + competence?.text, 'Evaluation : ' + evaluation, 'Commentaire privé : ' + n.commentaireEvaluationPrive, 'Commentaire publié : ' + n.commentaireEvaluationPublic, 'Commentaire de préparation : ' + n.constatEnPreparation];
                                    const libelleBouton = 'Ajouter la référence';
                                    problemes.push(new ProblemeAvecCorrectionAutomatique('PRO5', libelle, details, libelleBouton, [e.id, n.id, p.id]));
                                }
                            });
                        });
                    }
                });
            });
        }
    }

    /** Validation des références de données (FK au sein du JSON). */
    private analyserLesReferencesSimples(donnees: Annee, problemes: Probleme[]): void {

        // Déclaration des listes d'ID des objets référencés dans d'autres objets
        const listeIdCompetences = donnees.competences.map(c => c.id);
        const listeIdPeriodes = donnees.periodes.map(p => p.id);
        const listeIdEleves = donnees.eleves.map(e => e.id);
        const listeIdProjets = donnees.projets.map(p => p.id);
        listeIdProjets.push('ajoutManuel');

        // Validation des dates de période
        if (donnees.periodes) {
            donnees.periodes.forEach(p => {
                if (!p.debut || !p.fin) {
                    const libelle = 'La période \'' + p.nom + '\' a une date manquante.';
                    const explications = 'Utilisez le menu PARAMETRAGE pour corriger cette donnée';
                    problemes.push(new ProblemeAvecCorrectionManuelle('P1', libelle, [], explications));
                } else {
                    const idChevauchements = donnees.periodes.filter(pp =>
                        // Si toutes les dates sont là
                        pp.debut && pp.fin && p.debut && p.fin &&
                        // Si les ID sont bien différents
                        pp.id !== p.id &&
                        // Si la date de début ou de fin est comprise dans l'autre période
                        ((pp.debut < p.debut && p.debut < pp.fin) || (pp.fin < p.debut && p.fin < pp.fin))
                    ).map(p2 => p2.id);
                    if (idChevauchements.length > 0) {
                        const libelle = 'La période \'' + p.nom + '\' chevauche la(es) période(s) \'' + idChevauchements + '\'.';
                        const details = ['Attention à bien respecter les dates des périodes fournies par l\'état sur le site Service-Public.gouv.fr'];
                        const explications = 'Utilisez le menu PARAMETRAGE pour corriger cette donnée';
                        problemes.push(new ProblemeAvecCorrectionManuelle('P2', libelle, details, explications));
                    }
                }
            });
        } else {
            const libelle = 'Aucune période définie dans vos données. Elles sont obligatoires et essentielles';
            const explications = 'Utilisez le menu PARAMETRAGE pour corriger cette donnée';
            problemes.push(new ProblemeAvecCorrectionManuelle('P3', libelle, [], explications));
        }

        // Tri des périodes (au cas où)
        donnees.periodes.sort((p1, p2) => (p1.debut && p2.debut) ? p1.debut.getTime() - p2.debut.getTime() : -1);

        // Validation des références dans les données
        donnees.journal.forEach(j => {
            j.temps.forEach(t => {
                t.groupes.forEach(g => {
                    g.eleves.forEach(e => {
                        if (typeof e === undefined || !listeIdEleves.includes(e)) {
                            const libelle = 'Un journal référence un élève inconnu';
                            const details = ['Date : ' + this.datePipe.transform(j.date, 'dd/MM/yyyy'), 'Temps : de ' + t.debut + ' à ' + t.fin, 'Groupe : \'', g.nom + '\''];
                            const libelleBouton = 'Supprimer la référence';
                            problemes.push(new ProblemeAvecCorrectionAutomatique('J1', libelle, details, libelleBouton, [j.id, t.id, g.id, e]));
                        }
                    });
                    g.competences.forEach(c => {
                        if (typeof c === undefined || !listeIdCompetences.includes(c)) {
                            const libelle = 'Un journal référence une compétence inconnue';
                            const details = ['Date : ' + this.datePipe.transform(j.date, 'dd/MM/yyyy'), 'Temps : de ' + t.debut + ' à ' + t.fin, 'Groupe : \'', g.nom + '\''];
                            const libelleBouton = 'Supprimer la référence';
                            problemes.push(new ProblemeAvecCorrectionAutomatique('J2', libelle, details, libelleBouton, [j.id, t.id, g.id, c]));
                        }
                    });
                });
            });
        });
        (donnees.eleves || []).forEach(e => {
            e.notes.forEach(n => {
                if (typeof n.idPeriode === undefined || n.idPeriode && !listeIdPeriodes.includes(n.idPeriode)) {
                    const libelleCompetence = donnees.competences.find(c => c.id === n.idItem);
                    const libelle = 'Dans les données de \'' + e.prenom + '\', une note référence une période inconnue';
                    const details = ['Eleve : ' + e.prenom + ' ' + e.nom, 'Date création de la note : ' + this.datePipe.transform(n.dateCreation, 'dd/MM/yyyy'), 'Compétence : ' + libelleCompetence, 'Evaluation : ' + n.valeurEvaluation, 'Commentaire privé : ' + n.commentaireEvaluationPrive, 'Commentaire publié : ' + n.commentaireEvaluationPublic, 'Commentaire de préparation : ' + n.constatEnPreparation];
                    const libelleBouton = 'Supprimer la note';
                    problemes.push(new ProblemeAvecCorrectionAutomatique('N1', libelle, details, libelleBouton, [e.id, n.id]));
                }
                if (typeof n.idItem === undefined || n.idItem && !listeIdCompetences.includes(n.idItem)) {
                    const libellePeriode = donnees.periodes.find(p => p.id === n.idPeriode);
                    const libelle = 'Dans les données de \'' + e.prenom + '\', une note référence une compétence inconnue';
                    const details = ['Eleve : ' + e.prenom + ' ' + e.nom, 'Date création de la note : ' + this.datePipe.transform(n.dateCreation, 'dd/MM/yyyy'), 'Période : ' + libellePeriode, 'Evaluation : ' + n.valeurEvaluation, 'Commentaire privé : ' + n.commentaireEvaluationPrive, 'Commentaire publié : ' + n.commentaireEvaluationPublic, 'Commentaire de préparation : ' + n.constatEnPreparation];
                    const libelleBouton = 'Supprimer la note';
                    problemes.push(new ProblemeAvecCorrectionAutomatique('N2', libelle, details, libelleBouton, [e.id, n.id]));
                }
                // donnée optionnelle
                if (n.valeurEvaluation && !donnees.mapLibelleNotes[n.valeurEvaluation]) {
                    const libelle = 'Dans les données de \'' + e.prenom + '\', une note référence une valeur d\'évaluation inconnue';
                    const libelleCompetence = donnees.competences.find(c => c.id === n.idItem);
                    const libellePeriode = donnees.periodes.find(p => p.id === n.idPeriode);
                    const details = ['Eleve : ' + e.prenom + ' ' + e.nom, 'Date création de la note : ' + this.datePipe.transform(n.dateCreation, 'dd/MM/yyyy'), 'Compétence : ' + libelleCompetence, 'Période : ' + libellePeriode, 'Evaluation : ' + n.valeurEvaluation, 'Commentaire privé : ' + n.commentaireEvaluationPrive, 'Commentaire publié : ' + n.commentaireEvaluationPublic, 'Commentaire de préparation : ' + n.constatEnPreparation];
                    const explications = 'Corriger la valeur de l\'évaluation de cette note depuis le tableau de bord';
                    problemes.push(new ProblemeAvecCorrectionManuelle('N3', libelle, details, explications));
                }
                // donnée optionnelle
                if (n.idsProjets) {
                    const idsEnErreur = n.idsProjets.filter(id => !listeIdProjets.includes(id));
                    idsEnErreur.forEach(id => {
                        const libelle = 'Dans les données de \'' + e.prenom + '\', une note référence un projet inconnu';
                        const libelleCompetence = donnees.competences.find(c => c.id === n.idItem);
                        const libellePeriode = donnees.periodes.find(p => p.id === n.idPeriode);
                        const details = ['Eleve : ' + e.prenom + ' ' + e.nom, 'Date création de la note : ' + this.datePipe.transform(n.dateCreation, 'dd/MM/yyyy'), 'Compétence : ' + libelleCompetence, 'Période : ' + libellePeriode, 'Evaluation : ' + n.valeurEvaluation, 'Commentaire privé : ' + n.commentaireEvaluationPrive, 'Commentaire publié : ' + n.commentaireEvaluationPublic, 'Commentaire de préparation : ' + n.constatEnPreparation];
                        const libelleBouton = 'Supprimer la référence inconnue';
                        problemes.push(new ProblemeAvecCorrectionAutomatique('N4', libelle, details, libelleBouton, [e.id, n.id, id]));
                    });
                }
            });
            e.commentairesDePeriode.forEach(c => {
                if (typeof c.idPeriode === undefined || c.idPeriode && !listeIdPeriodes.includes(c.idPeriode)) {
                    const libelle = 'Dans les données de \'' + e.prenom + '\', une période inconnue \'' + c.idPeriode + '\' est référencée dans un commentaire de période';
                    const details = ['Elève : ' + e.prenom + ' ' + e.nom, 'Commentaire : ' + c.commentaire];
                    const libelleBouton = 'Supprimer le commentaire de période';
                    problemes.push(new ProblemeAvecCorrectionAutomatique('E1', libelle, details, libelleBouton, [e.id, c.id]));
                }
            });
            e.parcoursDePeriode.forEach(p => {
                if (typeof p.idPeriode === undefined || p.idPeriode && !listeIdPeriodes.includes(p.idPeriode)) {
                    const libelle = 'Dans les données de \'' + e.prenom + '\', une période inconnue \'' + p.idPeriode + '\' est référencée dans un parcours';
                    const details = ['Elève : ' + e.prenom + ' ' + e.nom, 'Parcours : ' + p.commentaire];
                    const libelleBouton = 'Supprimer le parcours de période';
                    problemes.push(new ProblemeAvecCorrectionAutomatique('E2', libelle, details, libelleBouton, [e.id, p.id]));
                }
            });
        });
        donnees.projets.forEach(p => {
            (p.sousProjetParPeriode || []).forEach(sp => {
                if (typeof sp.idPeriode === undefined || sp.idPeriode && !listeIdPeriodes.includes(sp.idPeriode)) {
                    const libelle = 'Dans le projet \'' + p.nom + '\', un sous-projet référence la période \'' + sp.idPeriode + '\' inconnue.';
                    const libelleBouton = 'Supprimer le sous-projet';
                    problemes.push(new ProblemeAvecCorrectionAutomatique('PRO1', libelle, [], libelleBouton, [p.id, sp.id]));
                }
                (sp.idCompetences || []).forEach(c => {
                    if (typeof c === undefined || !listeIdCompetences.includes(c)) {
                        const periode = donnees.periodes.find(p2 => p2.id === sp.idPeriode);
                        const libelle = 'Le projet \'' + p.nom + '\', pour la période \'' + periode?.nom + '\' référence une compétence inconnue';
                        const libelleBouton = 'Supprimer la référence inconnue';
                        problemes.push(new ProblemeAvecCorrectionAutomatique('PRO2', libelle, [], libelleBouton, [p.id, sp.id, c]));
                    }
                });
            });
        });
    }

    /** Correction du problème */
    public corrigerProbleme(donnees: Annee, pbNonType: Probleme): void {

        // pour les types P1, P2, N3
        if (!(pbNonType instanceof ProblemeAvecCorrectionAutomatique)) {
            return;
        }

        const pb = pbNonType as ProblemeAvecCorrectionAutomatique;

        // Elève / commentaire
        if (pb.code === 'E1') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idCommentaire = pb.ids[1];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve) {

                // Suppression de la données
                const index = eleve.commentairesDePeriode.findIndex(c => c.id === idCommentaire);
                if (index !== -1) {
                    eleve.commentairesDePeriode.splice(index, 1);
                }

                // Traité
                pb.resolu = true;
            }
        }

        // Elève / parcours
        else if (pb.code === 'E2') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idParcours = pb.ids[1];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve) {

                // Suppression de la données
                const index = eleve.parcoursDePeriode.findIndex(c => c.id === idParcours);
                if (index !== -1) {
                    eleve.parcoursDePeriode.splice(index, 1);
                }

                // Traité
                pb.resolu = true;
            }
        }

        // Journal / Temps / Groupe / Eleve
        // Journal / Temps / Groupe / Compétence
        else if (pb.code === 'J1' || pb.code === 'J2') {
            // Lecture des données
            const idJournal = pb.ids[0];
            const idTemps = pb.ids[1];
            const idGroupe = pb.ids[2];
            const idEleve = pb.ids[3];
            const idCompetence = pb.ids[3];

            const journal = donnees.journal.find(j => j.id === idJournal);
            if (journal) {
                const temps = journal.temps.find(t => t.id === idTemps);
                if (temps) {
                    const groupe = temps.groupes.find(g => g.id === idGroupe);
                    if (groupe) {
                        if (pb.code === 'J1' && idEleve) {
                            // Suppression de la données
                            const index = groupe.eleves.indexOf(idEleve);
                            if (index !== -1) {
                                groupe.eleves.splice(index, 1);
                            }

                            // Traité
                            pb.resolu = true;
                        }
                        else if (pb.code === 'J2' && idCompetence) {
                            // Suppression de la données
                            const index = groupe.competences.indexOf(idCompetence);
                            if (index !== -1) {
                                groupe.competences.splice(index, 1);
                            }

                            // Traité
                            pb.resolu = true;
                        }
                    }
                }
            }
        }

        // Eleve / Note
        else if (pb.code === 'N1' || pb.code === 'N2') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idNote = pb.ids[1];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve) {

                // Suppression de la données
                const index = eleve.notes.findIndex(n => n.id === idNote);
                if (index !== -1) {
                    eleve.notes.splice(index, 1);
                }

                // Traité
                pb.resolu = true;
            }
        }

        // Eleve Note / Projet
        else if (pb.code === 'N4') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idNote = pb.ids[1];
            const idProjet = pb.ids[2];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve && idProjet) {

                const note = eleve.notes.find(n => n.id === idNote);
                if (note && note.idsProjets) {

                    // Suppression de la données
                    const index = note.idsProjets.indexOf(idProjet);
                    if (index !== -1) {
                        note.idsProjets.splice(index, 1);
                    }

                    // Traité
                    pb.resolu = true;
                }
            }
        }

        // Projet / Sous-projet
        else if (pb.code === 'PRO1') {
            // Lecture des données
            const idProjet = pb.ids[0];
            const idSousProjet = pb.ids[1];
            const projet = donnees.projets.find(p => p.id === idProjet);
            if (projet && projet.sousProjetParPeriode) {

                // Suppression de la données
                const index = projet.sousProjetParPeriode.findIndex(sp => sp.id === idSousProjet);
                if (index !== -1) {
                    projet.sousProjetParPeriode.splice(index, 1);
                }

                // Traité
                pb.resolu = true;
            }
        }

        // Projet / Sous-projet / Compétence
        else if (pb.code === 'PRO2') {
            // Lecture des données
            const idProjet = pb.ids[0];
            const idSousProjet = pb.ids[1];
            const idCompetence = pb.ids[2];
            const projet = donnees.projets.find(p => p.id === idProjet);
            if (projet && projet.sousProjetParPeriode && idCompetence) {

                const sousProjet = projet.sousProjetParPeriode.find(sp => sp.id === idSousProjet);
                if (sousProjet && sousProjet.idCompetences) {

                    // Suppression de la données
                    const index = sousProjet.idCompetences.indexOf(idCompetence);
                    if (index !== -1) {
                        sousProjet.idCompetences.splice(index, 1);
                    }

                    // Traité
                    pb.resolu = true;
                }
            }
        }

        // Projet / eleve
        else if (pb.code === 'PRO3') {
            // Lecture des données
            const idProjet = pb.ids[0];
            const idEleve = pb.ids[1];
            const projet = donnees.projets.find(p => p.id === idProjet);
            if (projet && projet.idsEleve && idEleve) {

                // Suppression de la données
                const index = projet.idsEleve.indexOf(idEleve);
                if (index !== -1) {
                    projet.idsEleve.splice(index, 1);
                }

                // Traité
                pb.resolu = true;
            }
        }

        // Note manquante pour un couple Eleve-Projet
        else if (pb.code === 'PRO4') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idPeriode = pb.ids[1];
            const idProjet = pb.ids[2];
            const idCompetence = pb.ids[3];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve && idProjet) {

                // Création de la donnée
                const note = new Note();
                note.idItem = idCompetence;
                note.idPeriode = idPeriode;
                note.dateCreation = new Date();
                note.idsProjets = [idProjet];
                eleve.notes.push(note);

                // Traité
                pb.resolu = true;
            }
        }

        // Projet <= Note
        else if (pb.code === 'PRO5') {
            // Lecture des données
            const idEleve = pb.ids[0];
            const idNote = pb.ids[1];
            const idProjet = pb.ids[2];
            const eleve = donnees.eleves.find(e => e.id === idEleve);
            if (eleve && idProjet) {
                const note = eleve.notes.find(n => n.id === idNote);
                if (note && note.idsProjets && !note.idsProjets.includes(idProjet)) {
                    // Ajout de la référence
                    note.idsProjets.push(idProjet);

                    // Traité
                    pb.resolu = true;
                }
            }
        }

    }
}