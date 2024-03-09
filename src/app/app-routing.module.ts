import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { Error404Component } from './error404/error404.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'desarrollador', component: DesarrolladorComponent}, 
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent},
  {path: 'tres-en-raya', component: TresEnRayaComponent},
  {path: 'ahorcado', component: AhorcadoComponent},
  /*no insertar nada tras este componente v */ 
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
