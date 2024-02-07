import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', component: MenuInicialComponent}, 
  {path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent},
  
  /*no insertar nada tras este componente v */ 
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
