import { Injectable } from "@angular/core";
import { Eleve } from "../model/eleve-model";
import { Periode } from "../model/model";
import { CONSTATS_EN_PREPARATION_PAR_DEFAUT, Note } from "../model/note-model";
import { Projet, SousProjetParPeriode } from "../model/projet-model";

@Injectable({ providedIn: 'root' })
export class ProjetService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /** Ajout d'une compétence dans le sous-projet */
    public ajouterCompetence(sousProjet: SousProjetParPeriode, idCompetence: string, projet: Projet, eleves: Eleve[]): void {
        if (!sousProjet.idCompetences) {
            sousProjet.idCompetences = [];
        }

        // Ajout de la compétence au sous-projet
        sousProjet.idCompetences.push(idCompetence);

        // Ajout de notes à tous les élèves liés au projet pour la compétence et pour la période du sousProjet
        if (sousProjet.idPeriode && projet.idsEleve) {
            this.ajouterNotesLieesAunProjet(eleves, projet.idsEleve, projet.id, sousProjet.idPeriode, [idCompetence]);
        }
    }

    /** Ajout d'un élève à un temps */
    public ajouterEleveAuProjet(projet: Projet, idEleve: string, eleves: Eleve[]): void {
        if (!projet.idsEleve) {
            projet.idsEleve = [];
        }

        // Recherche de l'élève dans la liste
        const index = projet.idsEleve.indexOf(idEleve);

        // S'il n'y est pas
        if (index === -1) {

            // Ajout de l'élève
            projet.idsEleve.push(idEleve);

            // Ajout des notes à tous les élèves liés au projet pour les compétences du projet pour chaque période de sousProjet
            (projet.sousProjetParPeriode || []).forEach(ssProjet => {
                if (ssProjet.idPeriode && ssProjet.idCompetences) {
                    this.ajouterNotesLieesAunProjet(eleves, [idEleve], projet.id, ssProjet.idPeriode, ssProjet.idCompetences);
                }
            });
        }
    }

    /** Suppression des notes liées à un projet */
    private ajouterNotesLieesAunProjet(eleves: Eleve[], idsEleve: string[], idProjet: string, idPeriode: string, idsCompetence: string[]) {
        // pour chaque élève lié au projet
        eleves.forEach(e => {
            if (idsEleve?.includes(e.id)) {

                // Pour chaque compétence de la liste
                idsCompetence.forEach(idCompetence => {

                    // Recherche d'une note avec cette compétence (pour ne jamais avoir de doublon)
                    let note = e.notes.find(n => n.idItem === idCompetence && n.idPeriode === idPeriode);

                    // Si la note n'existe pas, on la crée et l'ajoute
                    if (!note) {
                        note = new Note();
                        note.idItem = idCompetence;
                        note.idPeriode = idPeriode;
                        note.dateCreation = new Date();
                        note.idsProjets = [];
                        e.notes.push(note);
                    }

                    // Ajout de l'id de projet si ce n'est pas déjà fait
                    if (!note.idsProjets?.includes(idProjet)) {
                        note.idsProjets?.push(idProjet);
                    }
                });
            }
        });
    }

    /** Ajout d'un projet */
    public ajouterUnProjet(projets: Projet[] | undefined): Projet {
        // Création du projet
        const nouveauProjet = new Projet();
        projets?.push(nouveauProjet);

        // Renvoi du nouveau projet
        return nouveauProjet;
    }

    /** Ajout d'un sous-projet */
    public ajouterUnSousProjet(projetSelectionne: Projet | undefined): void {
        // Création du sous-projet
        const ssProjet = new SousProjetParPeriode();
        projetSelectionne?.sousProjetParPeriode?.push(ssProjet);
    }

    /** Suppression des notes liées à un projet */
    public rechercherElevesAvecEvaluationPourUneCompetenceEtUnProjet(eleves: Eleve[], projet: Projet, idPeriode: string, idsCompetence: string[]): Eleve[] {

        // pour chaque élève 
        return eleves.filter(e =>
            // lié au projet
            projet.idsEleve?.includes(e.id) &&

            // avec au moins une note
            0 !== e.notes.filter(n =>
                //pour la compétence et la période à traiter
                n.idItem && idsCompetence.includes(n.idItem) && idPeriode === n.idPeriode &&
                // n'étant lié qu'à ce projet
                n.idsProjets && n.idsProjets.length === 1 && n.idsProjets[0] === projet.id &&
                // avec une donnée saisie
                (n.commentaireEvaluationPrive || n.commentaireEvaluationPublic || n.valeurEvaluation || (n.constatEnPreparation && n.constatEnPreparation != CONSTATS_EN_PREPARATION_PAR_DEFAUT))
            ).length
        );
    }

    /** Suppression de la compétence dans le sous-projet */
    public supprimerCompetence(sousProjet: SousProjetParPeriode, idCompetence: string, projet: Projet, eleves: Eleve[]): void {
        if (sousProjet && sousProjet.idCompetences && sousProjet.idPeriode && projet.idsEleve) {

            // Suppression de la compétence du sous-projet
            const index = sousProjet.idCompetences.indexOf(idCompetence);
            if (index !== -1) {
                sousProjet.idCompetences.splice(index, 1);
            }

            // Suppression des notes de tous les élèves liés au projet pour la compétences et pour la période du sousProjet
            this.supprimerNotesLieesAunProjet(eleves, projet.idsEleve, projet.id, sousProjet.idPeriode, [idCompetence]);
        }
    }

    /** Retrait d'un élève à un temps */
    public retirerEleveAuProjet(projet: Projet, idEleve: string, eleves: Eleve[]): void {
        if (!projet.idsEleve) {
            projet.idsEleve = [];
        }

        // Recherche de l'élève dans la liste
        const index = projet.idsEleve.indexOf(idEleve);

        // S'il y est
        if (index !== -1) {

            // Retrait de l'élève
            projet.idsEleve.splice(index, 1);

            // Suppression des notes de tous les élèves liés au projet pour toutes les compétences de chaque sous projet et pour la période de chaque sousProjet
            (projet.sousProjetParPeriode || []).forEach(ssProjet => {
                if (ssProjet.idPeriode && ssProjet.idCompetences) {
                    this.supprimerNotesLieesAunProjet(eleves, [idEleve], projet.id, ssProjet.idPeriode, ssProjet.idCompetences);
                }
            });
        }
    }

    /** Suppression des notes liées à un projet */
    private supprimerNotesLieesAunProjet(eleves: Eleve[], idsEleve: string[], idProjet: string, idPeriode: string, idsCompetence: string[]) {
        // pour chaque élève lié au projet
        eleves.forEach(e => {
            if (idsEleve?.includes(e.id)) {

                // Suppression des notes 
                e.notes = e.notes.filter(n => {
                    // liés aux périodes et compétences passées en paramètre
                    if (n.idItem && idsCompetence.includes(n.idItem) && idPeriode === n.idPeriode) {

                        // Retrait de l'id de projet
                        if (n.idsProjets) {
                            const index = n.idsProjets?.indexOf(idProjet);
                            if (index > -1) {
                                n.idsProjets?.splice(index, 1);
                            }
                        }

                        // On conserve la note s'il reste au moins un idProjet
                        return n.idsProjets && n.idsProjets.length > 0;
                    }

                    // Si la note n'est pas concernée, on la garde
                    else {
                        return true;
                    }
                });
            }
        });
    }

    /** Suppression du projet sélectionné. */
    public supprimerProjetSelectionne(projet: Projet | undefined, projets: Projet[] | undefined, eleves: Eleve[]): boolean {
        if (projet && projets) {

            // Suppression du projet
            const index = projets.indexOf(projet);
            if (index !== -1) {
                projets.splice(index, 1);
            }

            // Suppression des notes de tous les élèves liés au projet pour toutes les compétences de chaque sous projet et pour la période de chaque sousProjet
            (projet.sousProjetParPeriode || []).forEach(ssProjet => {
                if (ssProjet.idPeriode && ssProjet.idCompetences && projet.idsEleve) {
                    this.supprimerNotesLieesAunProjet(eleves, projet.idsEleve, projet.id, ssProjet.idPeriode, ssProjet.idCompetences);
                }
            });

            // MaJ Affichage
            return true;
        }

        // Pas de MaJ affichage
        return false;
    }

    /** Tri des lignes du projet */
    public trierLignes(projetSelectionne: Projet | undefined, periodes: Periode[] | undefined): void {
        if (projetSelectionne && projetSelectionne.sousProjetParPeriode) {
            projetSelectionne.sousProjetParPeriode.sort((sp1, sp2) => {
                if (sp1 && sp2 && sp1.idPeriode && sp2.idPeriode) {
                    const p1 = periodes?.find(p => p.id === sp1.idPeriode);
                    const p2 = periodes?.find(p => p.id === sp2.idPeriode);
                    if (p1 && p2 && p1.debut && p2.debut) {
                        return p1.debut.getTime() - p2.debut.getTime();
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            });
        }
    }
}