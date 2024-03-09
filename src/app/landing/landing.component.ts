import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router:Router) {}
  rutas:string[] = [
    "piedra-papel-tijera", 
    "tres-en-raya", 
    "ahorcado"];

  rutaRandom() {
    this.router.navigate([this.rutas.at(Math.floor(Math.random()*this.rutas.length))]);
  }

  rutaProy() {
    this.router.navigate(["proyecto"]);
  }

  rutaDev() {
    this.router.navigate(["desarrollador"]);
  }
}
