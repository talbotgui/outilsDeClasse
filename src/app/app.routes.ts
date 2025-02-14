import { Routes } from '@angular/router';
import { RouteAccueilComponent } from './routes/route-accueil/route-accueil.component';
import { RouteChargerDonneesComponent } from './routes/route-chargerdonnees/route-chargerdonnees.component';
import { RouteCompetenceComponent } from './routes/route-competence/route-competence.component';
import { RouteEleveComponent } from './routes/route-eleve/route-eleve.component';
import { RouteJournalComponent } from './routes/route-journal/route-journal.component';
import { RouteProjetComponent } from './routes/route-projet/route-projet.component';
import { RouteTacheComponent } from './routes/route-tache/route-tache.component';
import { RouteTdbComponent } from './routes/route-tdb/route-tdb.component';

/** Code des routes du projet */
export const ROUTE_ELEVE = 'route-eleve';
export const ROUTE_JOURNAL = 'route-journal';
export const ROUTE_PROJET = 'route-projet';
export const ROUTE_TACHE = 'route-taches';
export const ROUTE_TDB = 'route-tableaudebord';

/** Liste des routes possibles dans l'application.  */
export const routes: Routes = [
    // pour rediriger par défaut sur le dashboard
    { path: '', redirectTo: '/route-accueil', pathMatch: 'full' },
    { path: 'route-accueil', component: RouteAccueilComponent },
    { path: 'route-chargerdonnees', component: RouteChargerDonneesComponent },
    { path: 'route-creerdonnees', component: RouteAccueilComponent },
    { path: 'route-competence', component: RouteCompetenceComponent },
    { path: ROUTE_ELEVE, component: RouteEleveComponent },
    { path: ROUTE_JOURNAL, component: RouteJournalComponent },
    { path: ROUTE_PROJET, component: RouteProjetComponent },
    { path: ROUTE_TDB, component: RouteTdbComponent },
    { path: ROUTE_TACHE, component: RouteTacheComponent }
    // { path: 'tab-editionppi/:idEleve/:idPeriode', component: RouteAccueilComponent },
    // { path: 'tab-editionbilan/:idEleve/:idPeriode', component: RouteAccueilComponent },
    // { path: 'tab-nouvelleAnnee', component: RouteAccueilComponent },
];
