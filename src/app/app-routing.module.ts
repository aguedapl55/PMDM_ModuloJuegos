import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { Error404Component } from './error404/error404.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

const routes: Routes = [
  {path: '', component: MenuInicialComponent}, 
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
