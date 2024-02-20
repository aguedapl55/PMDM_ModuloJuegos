import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  fallos:number = 0;
  palabra:string = "";

  posiblesPalabras:string[] = ["manzana", "pera", "sandia", "melon", "uvas", "ciruela", "mango", "aguacate", "tomate", "patata", "lechuga", "ajo", "cebolla"];
  abecedario:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  charsPalabra:string[] = [];

  ngOnInit(): void {
      this.fallos = 0;
      this.palabra = this.posiblesPalabras[Math.floor(Math.random()*this.posiblesPalabras.length)];
      console.log("PALABRA ESCOGIDA: " + this.palabra);
      this.charsPalabra = this.palabra.split("");
  }

  recibirLetra(char:string) {
    this.charsPalabra.push(char);
    //this.array.includes devuelve true si contiene un elemento
  }
}
