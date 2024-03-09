import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  constructor(private router:Router) {}
  
  rutaPPS() {
    this.router.navigate(["piedra-papel-tijera"]);
  }

  rutaTres() {
    this.router.navigate(["tres-en-raya"]);
  }

  rutaHanged() {
    this.router.navigate(["ahorcado"]);
  }
}
