import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBar } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatTabsModule, 
    MatProgressBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
