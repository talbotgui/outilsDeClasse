import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule, Location } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ROUTE_COMPETENCE } from '../../app.routes';
import { NoeudCompetence } from '../../model/arbre-model';
import { Annee } from '../../model/model';
import { DemonstrationService } from '../../service/bouchon-service';
import { ContexteService } from '../../service/contexte-service';
import { AbstractRoute } from '../route';

@Component({
    selector: 'route-competence', templateUrl: './route-competence.component.html', styleUrl: './route-competence.component.scss',
    standalone: true, imports: [
        // Angular
        CommonModule, FormsModule,
        // Matérial
        ReactiveFormsModule, MatButtonModule, MatTooltipModule, MatTreeModule,
        // FontAwesome
        FontAwesomeModule,
        // Pour le copier/coller
        ClipboardModule
    ]
})
export class RouteCompetenceComponent extends AbstractRoute {

    /** Source de données de l'arbre (mode 'nested nodes' car moins de code TS et donc plus simple). */
    public dataSource = new MatTreeNestedDataSource<NoeudCompetence>();

    /** Données chargées dans le datasource mais sous forme de map */
    private mapNoeuds = new Map<string, NoeudCompetence>();

    /** Objet de controle de l'arbre (deprécié mais aucune documentation de l'usage sans cette classe au 17/09/2024). */
    public treeControl = new NestedTreeControl<NoeudCompetence>(n => n.noeudsEnfant);

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService, activatedRoute: ActivatedRoute, router: Router, location: Location, bouchonService: DemonstrationService) {
        super(router, activatedRoute, location, bouchonService);
    }

    /** @see classe parente */
    public initialiserRoute(): void {

        // Au chargement des données, récupéation de  la liste des élèves
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                // Si on a des données
                this.creerDataSourceArbre(donnees);
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** @see classe parente */
    public override afficherRaffraichirDonnees(): void {

        // MaJ de l'URL 
        this.mettreAjourUrl({});
    }

    /** @see classe parente */
    public override fournirCodeRoute(): string {
        return ROUTE_COMPETENCE;
    }

    /** @see classe parente */
    protected override passerEnModeLecture(): void {
        // rien à faire
    }

    /** Création de la structure de données pour l'arbre */
    private creerDataSourceArbre(donnees: Annee | undefined) {
        // Initialisation de la liste des noeuds 'racine'
        const noeudsRacine: NoeudCompetence[] = [];
        this.dataSource.data = noeudsRacine;

        // Initialisation de la map utilisée durant la création du jdd de l'arbre
        this.mapNoeuds = new Map<string, NoeudCompetence>();

        // Pour chaque compétence complète
        if (donnees && donnees.competences) {
            donnees.competences.forEach(c => {
                if (c.id && c.text && c.parent) {

                    // Création d'un noeud pour la compétence
                    const nouvelleCompetence = new NoeudCompetence(c.id, c.text, []);

                    // Sauvegarde du noeud dans la Map
                    this.mapNoeuds.set(c.id, nouvelleCompetence);

                    // Si la compétence n'a pas de parent, elle est racine
                    if (c.parent == '#') {
                        noeudsRacine.push(nouvelleCompetence);
                    }

                    // Sinon recherche du parent et ajout à ses noeuds enfants
                    else {
                        const noeudParent = this.mapNoeuds.get(c.parent);
                        if (noeudParent) {
                            nouvelleCompetence.noeudParent = noeudParent;
                            noeudParent.noeudsEnfant.push(nouvelleCompetence);
                        }
                    }
                }
            });
        }
    }

    /** Pour savoir si une competence a des enfants. */
    public estUneCompetenceParente(_: number, node: NoeudCompetence): boolean {
        return node.noeudsEnfant && node.noeudsEnfant.length > 0;
    }

    /** A la sélection d'un compétence dans le sélecteur de compétence. */
    public selectionnerCompetence(competence: any): void {

        // Collapse total
        this.treeControl.collapseAll();

        // Si la compétence est bien un noeud
        if (competence && competence.id) {
            const noeud = this.mapNoeuds.get(competence.id);
            if (noeud) {

                // Création du chemin vers le bon noeud
                const listeNoeud = [];
                let n: NoeudCompetence | undefined = noeud;
                while (n) {
                    listeNoeud.push(n);
                    n = n.noeudParent;
                }

                // En partant du dernier, expand de chaque noeud
                listeNoeud.reverse().forEach(n => this.treeControl.expand(n));
            }
        }
    }
}
