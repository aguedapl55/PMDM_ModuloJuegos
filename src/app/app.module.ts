import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { Error404Component } from './error404/error404.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { AhorcadoLetraComponent } from './ahorcado-letra/ahorcado-letra.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { TresEnRayaTileComponent } from './tres-en-raya-tile/tres-en-raya-tile.component';
import { LandingComponent } from './landing/landing.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PiedraPapelTijeraComponent,
    Error404Component,
    TresEnRayaComponent,
    AhorcadoComponent,
    AhorcadoLetraComponent,
    ProyectoComponent,
    DesarrolladorComponent,
    TresEnRayaTileComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
