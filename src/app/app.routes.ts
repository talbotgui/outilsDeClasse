import { Routes } from '@angular/router';
import { ROUTER_GUARD } from './routes/garde/route-guarde';
import { RouteCompetenceComponent } from './routes/organisation/route-competence/route-competence.component';
import { RouteEleveComponent } from './routes/organisation/route-eleve/route-eleve.component';
import { RouteProjetComponent } from './routes/organisation/route-projet/route-projet.component';
import { RouteJournalComponent } from './routes/quotidien/route-journal/route-journal.component';
import { RouteTacheComponent } from './routes/quotidien/route-tache/route-tache.component';
import { RouteTdbComponent } from './routes/quotidien/route-tdb/route-tdb.component';
import { RouteAccueilComponent } from './routes/route-accueil/route-accueil.component';
import { RouteChargerDonneesComponent } from './routes/route-chargerdonnees/route-chargerdonnees.component';
import { RouteParametrageComponent } from './routes/route-parametrage/route-parametrage.component';
import { RouteProblemeComponent } from './routes/route-probleme/route-probleme.component';

/** Code des routes du projet */
export const ROUTE_ACCUEIL = 'route-accueil';
export const ROUTE_CHARGER = 'route-chargerdonnees';
export const ROUTE_CREER = 'route-creerdonnees';
export const ROUTE_COMPETENCE = 'route-competence';
export const ROUTE_ELEVE = 'route-eleve';
export const ROUTE_JOURNAL = 'route-journal';
export const ROUTE_PARAMETRAGE = 'route-parametrage';
export const ROUTE_PROBLEME = 'route-problemes';
export const ROUTE_PROJET = 'route-projet';
export const ROUTE_TACHE = 'route-taches';
export const ROUTE_TDB = 'route-tableaudebord';

/** Liste des routes possibles dans l'application.  */
export const routes: Routes = [
    // pour rediriger par défaut sur le dashboard
    { path: '', redirectTo: '/' + ROUTE_ACCUEIL, pathMatch: 'full' },
    { path: ROUTE_ACCUEIL, component: RouteAccueilComponent },
    { path: ROUTE_CHARGER, component: RouteChargerDonneesComponent },
    { path: ROUTE_CREER, component: RouteAccueilComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_COMPETENCE, component: RouteCompetenceComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_ELEVE, component: RouteEleveComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_JOURNAL, component: RouteJournalComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_PARAMETRAGE, component: RouteParametrageComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_PROBLEME, component: RouteProblemeComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_PROJET, component: RouteProjetComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_TDB, component: RouteTdbComponent, canActivate: [ROUTER_GUARD] },
    { path: ROUTE_TACHE, component: RouteTacheComponent, canActivate: [ROUTER_GUARD] },
];
