import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { tap } from 'rxjs';
import { ROUTE_TDB } from '../../app.routes';
import { DialogSelectionCompetenceComponent } from '../../composants/dialogue-selectioncompetence/dialog-selectioncompetence.component';
import { Eleve } from '../../model/eleve-model';
import { MessageAafficher, TypeMessageAafficher } from '../../model/message-model';
import { Periode } from '../../model/model';
import { Competence, Note } from '../../model/note-model';
import { Projet } from '../../model/projet-model';
import { LigneDeTableauDeBord, SousLigneDeTableauDeBord } from '../../model/tdb-model';
import { ContexteService } from '../../service/contexte-service';
import { AbstractRoute } from '../route';

@Component({
    selector: 'route-tdb', templateUrl: './route-tdb.component.html', styleUrl: './route-tdb.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // FontAwesome
        FontAwesomeModule,
        // Matérial
        ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTooltipModule, MatSelectModule,
        // Composant applicatif
        DialogSelectionCompetenceComponent
    ]
})
export class RouteTdbComponent extends AbstractRoute {

    /** Donnees de référence : liste des élèves. */
    public eleves: Eleve[] = [];
    /** Donnees de référence : liste des projets. */
    public projets: Projet[] = [];
    /** Donnees de référence : liste des périodes. */
    public periodes: Periode[] = [];
    /** Donnees de référence : liste des périodes. */
    private competences: Competence[] = [];
    /** Donnees de référence : liste des compétences sous forme de MAP. */
    private mapCompetences = new Map<string, Competence>();
    /** Donnees de référence : libellés de note. */
    public mapLibelleNotes: { [key: string]: string } = {};

    /** Donnees manipulées : liste des lignes du tableau de bord. */
    public lignes: LigneDeTableauDeBord[] = [];

    /** Filtre : élève. */
    public eleveSelectionne: Eleve | undefined;
    /** Filtre : période. */
    public periodeSelectionnee: Periode | undefined;
    /** Filtre : Mode d'affichage. */
    public modeAffichage: string = "1";
    /** Filtre : "Groupement par". */
    public groupementPar: string = "1";

    /** Edition : groupe de compétence en cours d'édition */
    public indexEnEdition: number | undefined;

    /** ID du projet utilisé pour les ajouts manuels */
    private static readonly ID_PROJET_AJOUT_MANUEL = 'ajoutManuel';

    /** Constructeur pour injection des dépendances. */
    public constructor(router: Router, private contexteService: ContexteService, private activatedRoute: ActivatedRoute, private location: Location, private dialog: MatDialog) {
        super(router);
    }

    /** @see classe parente */
    public fournirCodeRoute(): string {
        return ROUTE_TDB;
    }

    /** @see classe parente */
    public initialiserRoute(): void {

        // Récupération du paramètre de date depuis l'URL
        const eleveEnParametreUrl = this.activatedRoute.snapshot.queryParams['eleve'];
        const periodeEnParametreUrl = this.activatedRoute.snapshot.queryParams['periode'];
        const modeAffichageEnParametreUrl = this.activatedRoute.snapshot.queryParams['affichage'];
        const groupementEnParametreUrl = this.activatedRoute.snapshot.queryParams['grouperPar'];

        // Au chargement des données,
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                // Copie des données nécessaires
                this.periodes = donnees?.periodes || [];
                this.eleves = donnees?.eleves || [];
                this.projets = donnees?.projets || [];
                this.competences = donnees?.competences || [];
                this.competences.forEach(c => this.mapCompetences.set(c.id || '', c));
                this.mapLibelleNotes = donnees?.mapLibelleNotes || {};

                // Initialisation des filtres à partir des données de l'URL (si présentes)
                if (eleveEnParametreUrl && periodeEnParametreUrl && periodeEnParametreUrl) {
                    this.eleveSelectionne = this.eleves.find(e => e.id === eleveEnParametreUrl);
                    this.periodeSelectionnee = this.periodes.find(e => e.id === periodeEnParametreUrl);
                    this.modeAffichage = modeAffichageEnParametreUrl;
                    this.groupementPar = groupementEnParametreUrl;
                }

                //  déclenchement du traitement de MaJ des données maintenant que les filtres sont initialisés
                this.afficherRaffraichirDonnees();
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Méthode d'ajout d'une note dans une sous-ligne pour laquelle la note n'existe pas pour une des deux périodes */
    public ajouterUneNotePourPreparation(sousLigne: SousLigneDeTableauDeBord): void {

        // Sélection de la période à utiliser pour la nouvelle note
        let periodeAutiliser = this.periodeSelectionnee;
        if (this.modeAffichage === "3" && this.periodeSelectionnee) {
            const indexPeriode = this.periodes.indexOf(this.periodeSelectionnee);
            if (indexPeriode + 1 < this.periodes.length) {
                periodeAutiliser = this.periodes[indexPeriode + 1];
            }
        }

        // Création de la note
        const note = new Note();
        note.dateCreation = new Date();
        note.idPeriode = periodeAutiliser?.id;
        note.idItem = sousLigne.competence?.id;
        note.idsProjets = [RouteTdbComponent.ID_PROJET_AJOUT_MANUEL];

        // Ajout aux notes
        if (this.eleveSelectionne && this.eleveSelectionne.notes) {
            this.eleveSelectionne.notes.push(note);
        }

        // Ajout à la sous-ligne (pour ne pas tout recalculer)
        sousLigne.notePeriodePreparee = note;
    }

    /** Ajout d'une ligne après l'ajout d'une compétence  */
    public ajouterUneLigneManuelle(): void {

        // Ouverture du dialog avec le composant de sélection de compétence
        const dialog = this.dialog.open(DialogSelectionCompetenceComponent, { minHeight: 600, minWidth: 1000 });

        // A la fermeture, ajout de la compétence (si sélectionnée)
        dialog.afterClosed().subscribe(competence => {

            // Si pas de sélection, c'est fini
            if (!competence || !this.periodeSelectionnee || !this.eleveSelectionne) {
                return;
            }

            const nbNotesAuDebut = this.eleveSelectionne.notes.length;

            // Gestion du mode d'affichage vis-à-vis de la période à modifier
            let indexPeriodeSelectionnee = this.periodes.indexOf(this.periodeSelectionnee);
            let periodeAutiliser = this.periodeSelectionnee;
            if (this.modeAffichage === "1" && indexPeriodeSelectionnee + 1 < this.periodes.length) {
                indexPeriodeSelectionnee++;
                periodeAutiliser = this.periodes[indexPeriodeSelectionnee];
            }

            // Recherche des notes
            const noteExistante = this.eleveSelectionne.notes.find(n => n.idItem === competence.id && n.idPeriode === periodeAutiliser.id);

            // création de la note
            if (!noteExistante) {
                const note = new Note();
                note.dateCreation = new Date();
                note.idPeriode = periodeAutiliser.id;
                note.idItem = competence.id;
                note.idsProjets = [RouteTdbComponent.ID_PROJET_AJOUT_MANUEL];
                this.eleveSelectionne.notes.push(note);
            }

            //  déclenchement du traitement de MaJ des données maintenant que les notes sont ajoutées
            const nbNotesAjoutees = this.eleveSelectionne.notes.length - nbNotesAuDebut;
            if (nbNotesAjoutees > 0) {
                const message = new MessageAafficher('ajouterUneLigne', TypeMessageAafficher.Information, nbNotesAjoutees + ' notes ajoutées au tableau de bord pour la compétence "' + competence.text + "'.");
                this.contexteService.afficherUnMessageGeneral(message);
                this.afficherRaffraichirDonnees();
            }

            // Si pas de note ajoutée, message à l'utilisateur
            else {
                const message = new MessageAafficher('ajouterUneLigne', TypeMessageAafficher.Avertissement, 'Aucune note ajoutée au tableau de bord pour la compétence "' + competence.text + "'.");
                this.contexteService.afficherUnMessageGeneral(message);
            }
        });
    }

    /** Recherche de l'ascendance d'une compétence */
    private calculerAscendance(idItem: string | undefined): Competence[] {
        // Init du tableau des ascendants
        const ascendance: Competence[] = [];

        // Recherche de l'ascendance
        let id = idItem;
        while (id && id != '#') {
            const competence = this.rechercherCompetence(id);
            if (competence) {
                ascendance.push(competence);
            }
            id = competence?.parent;
        }

        return ascendance.reverse();
    }

    /** Calcul (ou usage du cache) d'un libellé complet de compétence */
    private calculerLibelleDeCompetence(competence: Competence, aPartirDe: number = 0): string {
        let ascendance = this.calculerAscendance(competence.id);
        if (aPartirDe) {
            ascendance.splice(0, aPartirDe);
        }
        return ascendance.map(c => c.text).join(' > ');
    }

    /** Création des lignes à partir des notes */
    private creerLignesTdb(): void {

        // Initialisation des lignes du tableau
        this.initialiserLignes();

        // Si une période est sélectionnée
        if (this.periodeSelectionnee && this.eleveSelectionne) {

            // Création des lignes pour les deux périodes
            if (this.modeAffichage === "1") {
                this.creerSousLignesTableauDeBordPourUnePeriode(this.periodeSelectionnee, true, this.eleveSelectionne.notes);
            } else if (this.modeAffichage === "2") {
                this.creerSousLignesTableauDeBordPourUnePeriode(this.periodeSelectionnee, false, this.eleveSelectionne.notes);
            } else {
                this.creerSousLignesTableauDeBordPourUnePeriode(this.periodeSelectionnee, false, this.eleveSelectionne.notes);
                let indexPeriodeSelectionnee = this.periodes.indexOf(this.periodeSelectionnee);
                if (indexPeriodeSelectionnee + 1 < this.periodes.length) {
                    this.creerSousLignesTableauDeBordPourUnePeriode(this.periodes[indexPeriodeSelectionnee + 1], true, this.eleveSelectionne.notes);
                }
            }

            // Tri des lignes et sous-lignes
            const fonctionTri = (libelle1: string, libelle2: string) => {
                if (libelle1 < libelle2) {
                    return -1;
                } else if (libelle1 > libelle2) {
                    return 1;
                } else {
                    return 0;
                }
            }
            this.lignes.sort((l1, l2) => fonctionTri(l1.libelleCompetenceParenteOuNomProjet.toUpperCase(), l2.libelleCompetenceParenteOuNomProjet.toUpperCase()));
            this.lignes.forEach(l => l.sousLignes.sort((l1, l2) => fonctionTri(l1.libelleCompetence.toUpperCase(), l2.libelleCompetence.toUpperCase())))
        }
    }

    /** Création des lignes pour la période fournie. */
    private creerSousLignesTableauDeBordPourUnePeriode(periode: Periode, periodePreparee: boolean, notesDeLeleve: Note[]): void {
        if (!periode) {
            return;
        }

        // Pour chaque note 
        notesDeLeleve
            // de la période
            .filter(n => n.idPeriode == periode.id)
            // Création des lignes correspondantes
            .forEach(n => {
                // En mode "groupement par projet"
                if (this.groupementPar === "2") {
                    this.creerSousLigneTableauDeBordPourUneNoteAvecGroupementParProjet(n, periodePreparee);
                }
                // En mode "groupement par domaine"
                else {
                    this.creerSousLigneTableauDeBordPourUneNoteAvecGroupementParDomaine(n, periodePreparee);
                }
            });
    }

    /** Création de la sous-ligne (commune quelque soit le groupement) */
    private creerSousLigneTableauDeBordPourUneNote(ligne: LigneDeTableauDeBord, n: Note, periodePreparee: boolean) {
        // Recherche (ou création) de la sous-ligne pour cette compétence
        let sousLigne = ligne.sousLignes.find(sl => sl.competence?.id == n.idItem);
        if (!sousLigne) {
            sousLigne = new SousLigneDeTableauDeBord();
            sousLigne.competence = this.rechercherCompetence(n.idItem);
            if (sousLigne.competence) {
                sousLigne.libelleCompetence = this.calculerLibelleDeCompetence(sousLigne.competence, 3);
            }
            ligne.sousLignes.push(sousLigne);
        }

        // Alimentation des champs en fonction du type de période (évaluée ou préparéek)
        if (periodePreparee && !sousLigne.notePeriodePreparee) {
            sousLigne.notePeriodePreparee = n;
            sousLigne.referencesProjetPeriodePreparee = this.projets.filter(p => (n.idsProjets || []).includes(p.id));
        } else if (!periodePreparee && !sousLigne.notePeriodeEvaluee) {
            sousLigne.notePeriodeEvaluee = n;
            sousLigne.referencesProjetPeriodeEvaluee = this.projets.filter(p => (n.idsProjets || []).includes(p.id));
        } else {
            // message de succès
            const message = new MessageAafficher('chargerDonneesDeClasse', TypeMessageAafficher.Avertissement, 'Les données sauvegardées contiennent une incohérence : deux notes existent pour la même période et la même compétence ("' + n.idItem + '") et un même élève ("' + this.eleveSelectionne?.id + '")');
            this.contexteService.afficherUnMessageGeneral(message);
        }
    }

    /** Création d'une ligne à partir d'une note. */
    private creerSousLigneTableauDeBordPourUneNoteAvecGroupementParDomaine(n: Note, periodePreparee: boolean) {
        // Recherche des compétences de la note
        const competenceParente = this.rechercherCompetenceParente(n.idItem);

        // En cas de pb
        if (!competenceParente) {
            console.log('PROBLEME car pas de compétence parente pour la note', n);
            return;
        }

        // Recherche (ou création) de la ligne pour cette compétence parente
        const ligne = this.rechercherOuCreerLigneParCompetence(competenceParente);

        // Création/complétion de la sous-ligne
        this.creerSousLigneTableauDeBordPourUneNote(ligne, n, periodePreparee);
    }


    /** Création d'une ligne à partir d'une note. */
    private creerSousLigneTableauDeBordPourUneNoteAvecGroupementParProjet(n: Note, periodePreparee: boolean) {
        // Recherche des lignes parentes
        const lignesDeProjet = this.lignes.filter(l => l.projet && n.idsProjets && n.idsProjets.includes(l.projet.id));

        // En cas de pb
        if (!lignesDeProjet) {
            console.log('PROBLEME car pas de ligne de projet pour la note', n);
            return;
        }

        // Dans chaque ligne (donc chaque projet)
        lignesDeProjet.forEach(ligne => {
            // Création/complétion de la sous-ligne
            this.creerSousLigneTableauDeBordPourUneNote(ligne, n, periodePreparee);
        });
    }

    /** Initialisation des lignes du tableau de bord en fonction du regroupement. */
    private initialiserLignes(): void {
        // Si groupement par projet
        if (this.groupementPar === "2") {
            // La création des lignes se fait en fonction des projets
            this.lignes = this.projets.map(p => {
                const ligne = new LigneDeTableauDeBord();
                ligne.libelleCompetenceParenteOuNomProjet = p.nom || '';
                ligne.projet = p;
                return ligne;
            });
            // Plus la ligne d'ajout manuel
            const ligne = new LigneDeTableauDeBord();
            ligne.libelleCompetenceParenteOuNomProjet = 'Ajout manuel';
            ligne.projet = new Projet();
            ligne.projet.id = RouteTdbComponent.ID_PROJET_AJOUT_MANUEL;
            this.lignes.push(ligne);
        }
        // Sinon
        else {
            // La création des lignes se fera pour les domaines nécessaires au moment de la création des lignes
            this.lignes = [];
        }
    }

    /** @see classe parente */
    public afficherRaffraichirDonnees(): void {

        // MaJ de l'URL avec les données de filtrage
        if (this.eleveSelectionne && this.periodeSelectionnee && this.modeAffichage) {
            const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { eleve: this.eleveSelectionne.id, periode: this.periodeSelectionnee.id, affichage: this.modeAffichage, grouperPar: this.groupementPar } }).toString();
            this.location.go(url);
        }

        // Créer lignes du tdb
        this.creerLignesTdb();
    }

    /** Méthode de recherche dans les données de référence. */
    private rechercherCompetence(idCompetence: string | undefined): Competence | undefined {
        if (idCompetence) {
            return this.mapCompetences.get(idCompetence);
        } else {
            return undefined;
        }
    }

    /** Méthode de recherche dans les données de référence */
    private rechercherCompetenceParente(idItem: string | undefined): Competence | undefined {
        // Recherche de l'ascendance
        const ascendance = this.calculerAscendance(idItem);

        // Renvoi du niveau 3 (ou lenght-1 à défaut)
        if (ascendance.length >= 3) {
            return ascendance[2];
        } else {
            return undefined;
        }
    }

    /** Recherche ou création d'une ligne */
    private rechercherOuCreerLigneParCompetence(competenceParente: Competence): LigneDeTableauDeBord {
        let ligne = this.lignes.find(l => l.competenceParente?.id === competenceParente.id);
        if (!ligne) {
            ligne = new LigneDeTableauDeBord();
            ligne.competenceParente = competenceParente;
            ligne.libelleCompetenceParenteOuNomProjet = this.calculerLibelleDeCompetence(ligne.competenceParente);
            this.lignes.push(ligne);
        }
        return ligne;
    }

    /** Pour valider un temps directement via un CRTL+ENTRER */
    public onKeyUpSurPage(event: KeyboardEvent): void {
        if (!!event.ctrlKey && event.key == "Enter") {
            this.indexEnEdition = undefined;
        }
    }
}
