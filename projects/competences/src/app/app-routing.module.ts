import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Tous les composants applicatifs de l'application
import { TabCompetenceComponent } from './tab-competence/tab-competence.component';

const routes: Routes = [
  // pour rediriger par défaut sur le dashboard
  { path: '', redirectTo: '/tab-competence-route', pathMatch: 'full' },
  { path: 'tab-competence-route', component: TabCompetenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
