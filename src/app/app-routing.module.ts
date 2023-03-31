import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GrupoSeguridadComponent } from './components/grupo-seguridad/grupo-seguridad.component';
import { HistorialComponent } from './components/historial/historial.component';
import { LoginComponent } from './components/login/login.component';
import { PeriodoEscolarComponent } from './components/periodo-escolar/periodo-escolar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'groups' },      
      { path: 'groups', component: GroupsComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'periodo-escolar', component: PeriodoEscolarComponent },
      { path: 'grupo-seguridad', component: GrupoSeguridadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
