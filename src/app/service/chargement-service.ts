import { Injectable } from "@angular/core";
import { map, Observable, of, tap } from "rxjs";
import { InclusionEleve } from "../model/eleve-model";
import { GroupeSurUnTemps, Temps } from "../model/journal-model";
import { MessageAafficher, TypeMessageAafficher } from "../model/message-model";
import { Annee } from "../model/model";
import { ModelUtil } from "../model/model-utils";
import { Note } from "../model/note-model";
import { Projet, SousProjetParPeriode } from "../model/projet-model";
import { ContexteService } from "./contexte-service";

@Injectable({ providedIn: 'root' })
export class ChargementService {

    private static readonly FORMAT_DATE_ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;

    /** Constructeur pour injection des dépendances. */
    constructor(private contexteService: ContexteService) { }

    /**
     * Chargement du contenu d'un fichier JSON de données de classe.
     * @param donneesString Les données JSON sous forme de string.
     * @return un observable indiquant le résultat du traitement
     */
    public chargerDonneesDeClasse(donneesString: string): Observable<boolean> {

        // Parse de la string fournie
        return this.parserFichierJson(donneesString).pipe(
            map(donnees => {
                // Si le parse est un succès
                if (donnees) {
                    // Transcrire les données si elles sont dans un ancien format de données
                    if (!donneesString.includes('"versionMajeureApplication":2024')) {
                        donnees = this.transcrireDonnesSiAncienFormat(donnees);
                    }
                    // recompléter les données si des attributs sont manquants
                    this.completerDonneeSiManquante(donnees);
                    // validation des données
                    if (!this.validerDonnees(donnees)) {
                        return false;
                    }
                    // sauvegarde des données dans le contexte
                    this.contexteService.sauvegarderDonnesDeClasseChargee(donnees);
                    // message de succès
                    this.contexteService.afficherUnMessageGeneral(new MessageAafficher("chargerDonneesDeClasse", TypeMessageAafficher.Information, "Le fichier de données est correctement chargé."));
                    // renvoi OK
                    return true;
                }
                // sinon
                else {
                    //Message d'erreur
                    this.contexteService.afficherUnMessageGeneral(new MessageAafficher("chargerDonneesDeClasse", TypeMessageAafficher.Erreur, "Erreur durant l'analyse du contenu du fichier. Est-ce bien un fichier de données de l'application MaClasse ?"));
                    // renvoi KO
                    return false;
                }
            })
        );
    }

    /** Ajout /completion d'attributs/membres vides. */
    private completerDonneeSiManquante(donnees: Annee): void {

        // Initialisation des listes et map si null ou undefined
        donnees.competences = donnees.competences ?? [];
        donnees.eleves = donnees.eleves ?? [];
        donnees.journal = donnees.journal ?? [];
        donnees.mapLibelleNotes = donnees.mapLibelleNotes ?? {};
        donnees.mapLibelleStatutEleve = donnees.mapLibelleStatutEleve ?? {};
        donnees.mapTypeContact = donnees.mapTypeContact ?? {};
        donnees.mapRaisonAbsence = donnees.mapRaisonAbsence ?? {};
        donnees.notes = donnees.notes ?? [];
        donnees.periodes = donnees.periodes ?? [];
        donnees.projets = donnees.projets ?? [];
        donnees.taches = donnees.taches ?? [];

        // Initialisation des ID si manquant
        donnees.competences.forEach(c => c.id = c.id ?? ModelUtil.getUID());
        donnees.eleves.forEach(e => {
            e.id = e.id ?? ModelUtil.getUID();
            e.inclusion = e.inclusion ?? new InclusionEleve();
            e.contacts = e.contacts ?? [];
            e.absences = e.absences ?? [];
            e.cursus = e.cursus ?? [];
            e.inclusion.id = e.inclusion.id ?? ModelUtil.getUID();
            e.contacts.forEach(c => c.id = c.id ?? ModelUtil.getUID());
            e.cursus.forEach(c => c.id = c.id ?? ModelUtil.getUID());
            e.absences.forEach(a => a.id = a.id ?? ModelUtil.getUID());
        });
        donnees.journal.forEach(j => {
            j.id = j.id ?? ModelUtil.getUID();
            j.temps = j.temps ?? [];
            j.temps.forEach(t => {
                t.id = t.id ?? ModelUtil.getUID();
                t.groupes = t.groupes ?? [];
                t.groupes.forEach(g => g.id = g.id ?? ModelUtil.getUID());
                t.type = (t.type) ? t.type : 'classe';
            });
        });
        donnees.notes.forEach(n => {
            n.id = n.id ?? ModelUtil.getUID()
            n.idsProjets = n.idsProjets ?? [];
        });
        donnees.periodes.forEach(p => p.id = p.id ?? ModelUtil.getUID());
        donnees.projets.forEach(p => {
            p.id = p.id ?? ModelUtil.getUID();
            p.sousProjetParPeriode = p.sousProjetParPeriode ?? [];
            p.sousProjetParPeriode.forEach(sp => {
                sp.id = sp.id ?? ModelUtil.getUID();
                sp.idCompetences = sp.idCompetences ?? [];
            });
        });
        donnees.taches.forEach(t => {
            t.id = t.id ?? ModelUtil.getUID();
            t.echeances = t.echeances ?? [];
        });
    }

    /** Génération d'un JSON à partir des données présentes dans le contexte */
    public genererContenuJsonPourSauvegarde(): Observable<string> {
        return this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                if (donnees) {
                    donnees.dateDerniereSauvegarde = new Date();
                }
            }),
            map(donnees => JSON.stringify(donnees, null, 2))
        );
    }

    /** Parse du fichier. */
    private parserFichierJson(json: string): Observable<Annee | undefined> {

        // Fonction traitant les dates dans le JSON
        const parseIsoDateStrToDate = (key: string, value: any) => {
            if (typeof value === "string" && ChargementService.FORMAT_DATE_ISO.test(value)) {
                return new Date(value);
            }
            return value
        }

        // Parse du JSON
        try {
            return of(JSON.parse(json, parseIsoDateStrToDate))
        } catch (error) {
            console.error(error);
            return of(undefined);
        }
    }

    /**  Si les données sont à un ancien format, ménage et réadaptation.*/
    private transcrireDonnesSiAncienFormat(donnees: Annee): Annee {

        // Suppression de données inutiles
        const listeDesAttributsAsupprimer = ['libellesTypeTempsJournal', 'erreursChargement', 'historique'];
        donnees = Object.fromEntries(Object.entries(donnees).filter(([key]) => !listeDesAttributsAsupprimer.includes(key))) as Annee;

        // Traitement des notes
        donnees.notes = (donnees.notes||[]).map(note => {

            // Recréation d'un objet propre
            const listeDesAttributsAsupprimer = ['valeur', 'date', 'commentaire', 'outil', 'constat', 'proposition'];
            const nouvelleNote = Object.fromEntries(Object.entries(note).filter(([key]) => !listeDesAttributsAsupprimer.includes(key))) as Note;

            const entreeValeur = Object.entries(note).find(entree => entree[0] === 'valeur');
            if (entreeValeur && entreeValeur[1]) {
                nouvelleNote.valeurEvaluation = entreeValeur[1];
            }
            const entreeCommentaire = Object.entries(note).find(entree => entree[0] === 'commentaire');
            if (entreeCommentaire && entreeCommentaire[1]) {
                nouvelleNote.commentaireEvaluationPublic = entreeCommentaire[1];
            }
            nouvelleNote.constatEnPreparation = '';
            const entreeOutils = Object.entries(note).find(entree => entree[0] === 'outil');
            if (entreeOutils && entreeOutils[1]) {
                nouvelleNote.constatEnPreparation += ('Outil : ' + entreeOutils[1] + '\n');
            }
            const entreeConstat = Object.entries(note).find(entree => entree[0] === 'constat');
            if (entreeConstat && entreeConstat[1]) {
                nouvelleNote.constatEnPreparation += ('Constat : ' + entreeConstat[1] + '\n');
            }
            const entreeProposition = Object.entries(note).find(entree => entree[0] === 'proposition');
            if (entreeProposition && entreeProposition[1]) {
                nouvelleNote.constatEnPreparation += ('Proposition : ' + entreeProposition[1] + '\n');
            }
            const entreeDate = Object.entries(note).find(entree => entree[0] === 'date');
            if (entreeDate && entreeDate[1]) {
                const periode = donnees?.periodes.find(p => p.debut && p.fin && p.debut <= entreeDate[1] && entreeDate[1] <= p.fin);
                if (periode) {
                    nouvelleNote.idPeriode = periode.id;
                }
            }
            return nouvelleNote;
        });

        // Traitement des journaux
        (donnees.journal||[]).forEach(journal => {
            journal.temps = journal.temps.map(temps => {

                // Recréation d'un objet propre
                const listeDesAttributsAsupprimer = ['competences', 'eleves', 'nom'];
                const nouveauTemps = Object.fromEntries(Object.entries(temps).filter(([key]) => !listeDesAttributsAsupprimer.includes(key))) as Temps;

                // Création d'un unique groupe
                nouveauTemps.groupes = nouveauTemps.groupes ?? [];
                const groupe = new GroupeSurUnTemps();
                nouveauTemps.groupes.push(groupe);

                nouveauTemps.type = 'classe';
                const entreeNom = Object.entries(temps).find(entree => entree[0] === 'nom');
                if (entreeNom && entreeNom[1]) {
                    groupe.nom = entreeNom[1];
                }
                const entreeCommentaire = Object.entries(temps).find(entree => entree[0] === 'commentaire');
                if (entreeCommentaire && entreeCommentaire[1]) {
                    groupe.commentaire = entreeCommentaire[1];
                }
                const entreeEleves = Object.entries(temps).find(entree => entree[0] === 'eleves');
                if (entreeEleves && entreeEleves[1]) {
                    groupe.eleves = entreeEleves[1] as string[];
                }
                const entreeCompetences = Object.entries(temps).find(entree => entree[0] === 'competences');
                if (entreeCompetences && entreeCompetences[1]) {
                    groupe.competences = entreeCompetences[1] as string[];
                }
                return nouveauTemps;
            });
        });

        // Traitement des projets
        donnees.projets = (donnees.projets||[]).map(projet => {

            // Recréation d'un objet propre
            const listeDesAttributsAsupprimer = ['idCompetences'];
            const nouveauProjet = Object.fromEntries(Object.entries(projet).filter(([key]) => !listeDesAttributsAsupprimer.includes(key))) as Projet;

            // Création d'un unique groupe
            nouveauProjet.sousProjetParPeriode = nouveauProjet.sousProjetParPeriode ?? [];
            const nouveauSousProjet = new SousProjetParPeriode();
            nouveauProjet.sousProjetParPeriode.push(nouveauSousProjet);

            const entreeCompetences = Object.entries(projet).find(entree => entree[0] === 'idCompetences');
            if (entreeCompetences && entreeCompetences[1]) {
                nouveauSousProjet.idCompetences = entreeCompetences[1] as string[];
            }
            if (donnees && donnees.periodes) {
                nouveauSousProjet.idPeriode = donnees?.periodes[0].id;
            }
            return nouveauProjet;
        });

        // Renvoi des données
        return donnees;
    }

    /** Validation des références de données (FK au sein du JSON). */
    private validerDonnees(donnees: Annee): boolean {

        // Déclaration des listes d'ID des objets référencés dans d'autres objets
        const listeIdCompetences = donnees.competences.map(c => c.id);
        const listeIdPeriodes = donnees.periodes.map(p => p.id);
        const listeIdEleves = donnees.eleves.map(e => e.id);
        const listeIdProjets = donnees.projets.map(p => p.id);

        // Init de la liste des messages d'erreur
        const listeErreurs: string[] = [];

        // Validation des dates de période
        if (donnees.periodes) {
            donnees.periodes.forEach(p => {
                if (!p.debut || !p.fin) {
                    listeErreurs.push('La période "' + p.id + '" a une date manquante.');
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
                        listeErreurs.push('La(es) période(s) "' + idChevauchements + '" chevauche(nt) la période "' + p.id + '".');
                    }
                }
            });
        } else {
            listeErreurs.push('Aucune période définie dans vos données. Elles sont obligatoires et essentielles');
        }

        // Tri des périodes (au cas où)
        donnees.periodes.sort((p1, p2) => (p1.debut && p2.debut) ? p1.debut.getTime() - p2.debut.getTime() : -1);

        // Validation des références dans les données
        donnees.journal.forEach(j => {
            j.temps.forEach(t => {
                t.groupes.forEach(g => {
                    g.eleves.forEach(e => {
                        if (typeof e == undefined || !listeIdEleves.includes(e)) {
                            listeErreurs.push('Eleve "' + e + '" inconnu dans les données mais référencée dans la journal "' + j.id + '"');
                        }
                    });
                    g.competences.forEach(c => {
                        if (typeof c == undefined || !listeIdCompetences.includes(c)) {
                            listeErreurs.push('Compétence "' + c + '" inconnue dans les données mais référencée dans la journal "' + j.id + '"');
                        }
                    });
                });
            });
        });
        donnees.notes.forEach(n => {
            if (typeof n.idPeriode == undefined || n.idPeriode && !listeIdPeriodes.includes(n.idPeriode)) {
                listeErreurs.push('Periode "' + n.idPeriode + '" inconnue dans les données mais référencée dans la note "' + n.id + '"');
            }
            if (typeof n.idEleve == undefined || n.idEleve && !listeIdEleves.includes(n.idEleve)) {
                listeErreurs.push('Eleve "' + n.idEleve + '" inconnu dans les données mais référencée dans la note "' + n.id + '"');
            }
            if (typeof n.idItem == undefined || n.idItem && !listeIdCompetences.includes(n.idItem)) {
                listeErreurs.push('Compétence "' + n.idItem + '" inconnue dans les données mais référencée dans la note "' + n.id + '"');
            }
            // donnée optionnelle
            if (n.valeurEvaluation && !donnees.mapLibelleNotes[n.valeurEvaluation]) {
                listeErreurs.push('Valeur "' + n.valeurEvaluation + '" inconnue dans les données mais référencée dans la note "' + n.id + '"');
            }
            // donnée optionnelle
            if (n.idsProjets) {
                const idsEnErreur = n.idsProjets.filter(id => !listeIdProjets.includes(id));
                if (idsEnErreur.length > 0) {
                    listeErreurs.push('Projet(s) "' + idsEnErreur + '" inconnu(s) dans les données mais référencée dans la note "' + n.id + '"');
                }
            }
        });
        donnees.projets.forEach(p => {
            (p.sousProjetParPeriode || []).forEach(sp => {
                if (typeof sp.idPeriode == undefined || sp.idPeriode && !listeIdPeriodes.includes(sp.idPeriode)) {
                    listeErreurs.push('Periode "' + sp.idPeriode + '" inconnue dans les données mais référencée dans le projet "' + p.nom + '"');
                }
                (sp.idCompetences || []).forEach(c => {
                    if (typeof c == undefined || !listeIdCompetences.includes(c)) {
                        listeErreurs.push('Compétence "' + c + '" inconnue dans les données mais référencée dans le projet "' + p.nom + '"');
                    }
                });
            });
        });

        // Gestion de la liste des messages
        if (listeErreurs.length > 0) {
            const message = listeErreurs.length + ' erreurs dans les données chargées :<ul class="maclasse-texteagauche"><li>' + listeErreurs.join('</li><li>') + '</li></ul>';
            this.contexteService.afficherUnMessageGeneral(new MessageAafficher("validerDonnees", TypeMessageAafficher.Erreur, message));
        }
        return listeErreurs.length == 0;
    }
}