import { Injectable } from "@angular/core";
import { MessageAafficher, TypeMessageAafficher } from "../model/message-model";
import { Annee } from "../model/model";
import { Probleme } from "../model/probleme-model";
import { ContexteService } from "./contexte-service";

@Injectable({ providedIn: 'root' })
export class ProblemeService {

    /** Constructeur pour injection des dépendances. */
    constructor(private contexteService: ContexteService) { }

    /** Méthode d'analyse des données après le chargement pour lister les problèmes */
    public analyserDonnees(donnees: Annee): void {

        // Initialisation de la liste des problèmes
        const problemes: Probleme[] = [];

        // Analyse des références croisées simples
        this.analyserLesReferencesSimples(donnees, problemes);

        // Analyse des données des projets et recherche des notes associées (présentes et projet bien référencé)
        this.analyserLesProjets(donnees, problemes);

        // Analyse des notes et contrôle des références de projet (id de projet existant et compétence+période cohérente)

        // Publication de la liste des problèmes
        if (problemes.length > 0) {
            problemes.sort((a, b) => (a.code + a.libelle).localeCompare(b.code + b.libelle));
            this.contexteService.declarerDesProblemesDeDonnees(problemes);

            this.contexteService.afficherUnMessageGeneral(new MessageAafficher("analyserDonnees", TypeMessageAafficher.Avertissement, "Le fichier de données contient quelques problèmes. Utilisez l'onglet 'Problèmes' pour les résoudre."));
        }
    }

    /** Analyse des projets présents dans les données */
    private analyserLesProjets(donnees: Annee, problemes: Probleme[]): void {
        if (donnees && donnees.projets && donnees.eleves) {
            donnees.projets.forEach(p => {
                p.idsEleve?.forEach(idEleve => {
                    const e = donnees.eleves.find(e => e.id === idEleve);

                    // Eleve non trouvé
                    if (!e) {
                        const libelle = 'L\'élève \'' + idEleve + '\' n\'est pas présent dans les données mais est référencé dans le projet \'' + p.nom + '\' (' + p.id + ')';
                        problemes.push(new Probleme('PRO3', libelle, [p.id, idEleve]));
                    }

                    // Eleve trouvé
                    else {

                        // Recherche de la note pour chaque sousProjet et chaque compétence
                        p.sousProjetParPeriode?.forEach(sp => {
                            sp.idCompetences?.forEach(idCompetence => {
                                const indexNoteTrouve = e.notes.findIndex(n => n.idItem === idCompetence && n.idPeriode === sp.idPeriode)

                                // Si la note n'est pas trouvée, problème
                                if (indexNoteTrouve === -1) {
                                    const periode = donnees.periodes.find(p => p.id === sp.idPeriode);
                                    const competence = donnees.competences.find(c => c.id === idCompetence);
                                    const libelle = 'L\'élève \'' + e.prenom + '\' est associé au projet \'' + p.nom + '\' mais n\'a pas de note pour la compétence \'' + competence?.text + '\' (' + idCompetence + ') et la période \'' + periode?.nom + '\' (' + sp.idPeriode + ').';
                                    problemes.push(new Probleme('PRO4', libelle, [p.id, sp.id, idCompetence]));
                                }

                                // Sinon si la note n'a pas l'ID du projet dans ses références
                                else if (!e.notes[indexNoteTrouve].idsProjets?.includes(p.id)) {
                                    const periode = donnees.periodes.find(p => p.id === sp.idPeriode);
                                    const competence = donnees.competences.find(c => c.id === idCompetence);
                                    const libelle = 'La note de l\'élève \'' + e.prenom + '\' associée à la compétence \'' + competence?.text + '\' (' + idCompetence + ') et à la période \'' + periode + '\' (' + sp.idPeriode + ') ne référence pas le projet \'' + p.nom + '\'.';
                                    problemes.push(new Probleme('PRO5', libelle, [p.id, sp.id, e.notes[indexNoteTrouve].id]));
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
                    const libelle = 'La période "' + p.id + '" a une date manquante.';
                    problemes.push(new Probleme('P1', libelle, [p.id]));
                } else {
                    const idChevauchements = donnees.periodes.filter(pp =>
                        // Si toutes les dates sont là
                        pp.debut && pp.fin && p.debut && p.fin &&
                        // Si les ID sont bien différents
                        pp.id != p.id &&
                        // Si la date de début ou de fin est comprise dans l'autre période
                        ((pp.debut < p.debut && p.debut < pp.fin) || (pp.fin < p.debut && p.fin < pp.fin))
                    ).map(p => p.id);
                    if (idChevauchements.length > 0) {
                        const libelle = 'La(es) période(s) "' + idChevauchements + '" chevauche(nt) la période "' + p.id + '".';
                        problemes.push(new Probleme('P2', libelle, [p.id, ...idChevauchements]));
                    }
                }
            });
        } else {
            const libelle = 'Aucune période définie dans vos données. Elles sont obligatoires et essentielles';
            problemes.push(new Probleme('P3', libelle, []));
        }

        // Tri des périodes (au cas où)
        donnees.periodes.sort((p1, p2) => (p1.debut && p2.debut) ? p1.debut.getTime() - p2.debut.getTime() : -1);

        // Validation des références dans les données
        donnees.journal.forEach(j => {
            j.temps.forEach(t => {
                t.groupes.forEach(g => {
                    g.eleves.forEach(e => {
                        if (typeof e == undefined || !listeIdEleves.includes(e)) {
                            const libelle = 'Eleve "' + e + '" inconnu dans les données mais référencée dans la journal "' + j.id + '"';
                            problemes.push(new Probleme('J1', libelle, [j.id, e]));
                        }
                    });
                    g.competences.forEach(c => {
                        if (typeof c == undefined || !listeIdCompetences.includes(c)) {
                            const libelle = 'Compétence "' + c + '" inconnue dans les données mais référencée dans la journal "' + j.id + '"';
                            problemes.push(new Probleme('J2', libelle, [j.id, c]));
                        }
                    });
                });
            });
        });
        (donnees.eleves || []).forEach(e => {
            e.notes.forEach(n => {
                if (typeof n.idPeriode == undefined || n.idPeriode && !listeIdPeriodes.includes(n.idPeriode)) {
                    const libelle = 'Periode "' + n.idPeriode + '" inconnue dans les données mais référencée dans la note "' + n.id + '"';
                    problemes.push(new Probleme('N1', libelle, [e.id, n.id]));
                }
                if (typeof n.idItem == undefined || n.idItem && !listeIdCompetences.includes(n.idItem)) {
                    const libelle = 'Compétence "' + n.idItem + '" inconnue dans les données mais référencée dans la note "' + n.id + '"';
                    problemes.push(new Probleme('N2', libelle, [e.id, n.id, n.idItem]));
                }
                // donnée optionnelle
                if (n.valeurEvaluation && !donnees.mapLibelleNotes[n.valeurEvaluation]) {
                    const libelle = 'Valeur "' + n.valeurEvaluation + '" inconnue dans les données mais référencée dans la note "' + n.id + '"';
                    problemes.push(new Probleme('N3', libelle, [e.id, n.id, n.valeurEvaluation]));
                }
                // donnée optionnelle
                if (n.idsProjets) {
                    const idsEnErreur = n.idsProjets.filter(id => !listeIdProjets.includes(id));
                    idsEnErreur.forEach(id => {
                        const libelle = 'Projet "' + id + '" inconnu dans les données mais référencée dans la note "' + n.id + '"';
                        problemes.push(new Probleme('N4', libelle, [e.id, n.id, id]));
                    });
                }
            });
            e.commentairesDePeriode.forEach(c => {
                if (typeof c.idPeriode == undefined || c.idPeriode && !listeIdPeriodes.includes(c.idPeriode)) {
                    const libelle = 'Periode "' + c.idPeriode + '" inconnue dans les données mais référencée dans le commentaire de période "' + c.id + '"';
                    problemes.push(new Probleme('E1', libelle, [e.id, c.id]));
                }
            });
            e.parcoursDePeriode.forEach(p => {
                if (typeof p.idPeriode == undefined || p.idPeriode && !listeIdPeriodes.includes(p.idPeriode)) {
                    const libelle = 'Periode "' + p.idPeriode + '" inconnue dans les données mais référencée dans le parcours de période "' + p.id + '"';
                    problemes.push(new Probleme('E2', libelle, [e.id, p.id]));
                }
            });
        });
        donnees.projets.forEach(p => {
            (p.sousProjetParPeriode || []).forEach(sp => {
                if (typeof sp.idPeriode == undefined || sp.idPeriode && !listeIdPeriodes.includes(sp.idPeriode)) {
                    const libelle = 'Periode "' + sp.idPeriode + '" inconnue dans les données mais référencée dans le projet "' + p.nom + '"';
                    problemes.push(new Probleme('PRO1', libelle, [p.id, sp.id]));
                }
                (sp.idCompetences || []).forEach(c => {
                    if (typeof c == undefined || !listeIdCompetences.includes(c)) {
                        const libelle = 'Compétence "' + c + '" inconnue dans les données mais référencée dans le projet "' + p.nom + '"';
                        problemes.push(new Probleme('PRO2', libelle, [p.id, sp.id, c]));
                    }
                });
            });
        });
    }
}