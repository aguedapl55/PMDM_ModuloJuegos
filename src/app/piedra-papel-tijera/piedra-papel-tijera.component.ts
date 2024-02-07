import { Component } from '@angular/core';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {
  p:string = "";
  m:string = "";
  s:string = "";
  vidasP:number=5;
  vidasM:number=5;
  elecciones:string[] = ["rock", "paper", "scissors"];

  ngOnInit(): void {
    this.vidasP = this.vidasM = 5;
    this.p = this.m = "";
  }

  elegir(eleccion:string) {
    if (!(this.vidasM == 0 || this.vidasP == 0)) {
      this.p = this.m = this.s = ""
      this.p = eleccion;
      var maquina = Math.floor(Math.random()*3);
      this.m = this.elecciones[maquina];
            
      if ((eleccion  == "scissors" && this.elecciones[maquina] == "paper") || 
      (eleccion == "rock" && this.elecciones[maquina] == "scissors") || 
      (eleccion == "paper" && this.elecciones[maquina] == "rock")) {
        this.s = "winner";
        this.vidasM -= 1;
      }
      else if ((eleccion == "rock" && this.elecciones[maquina] == "paper") ||
      (eleccion == "paper" && this.elecciones[maquina] == "scissors") ||
      (eleccion == "scissors" && this.elecciones[maquina] == "rock")) {
        this.s = "loser";
        this.vidasP -= 1;
      }
      else {
        this.s = "tie";
      }
    }
  }

  replay() {
    //no entiendo del todo como hacer esto, he visto en internet que 
      //window.location.reload() deberia funcionar, pero no funciona por alguna razon
    window.location.reload();
    this.ngOnInit();    
  }
}
