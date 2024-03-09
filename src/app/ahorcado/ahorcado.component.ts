import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  fallos:number = 0;
  palabra:string = "";
  char:string ="";

  posiblesPalabras:string[] = ["MANZANA", "PERA", "SANDIA", "MELON", "UVAS", "CIRUELA", "MANGO", "AGUACATE", "TOMATE", "PATATA", "LECHUGA", "AJO", "CEBOLLA"];
  abecedario:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  charsPalabra:string[] = [];
  charsGuessed:string[] = [];
  aux:string[] = []
  auxbool:boolean = false;
  
  ngOnInit(): void {
    this.abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.fallos = 0;
    this.palabra = this.posiblesPalabras[Math.floor(Math.random()*this.posiblesPalabras.length)];
    console.log("PALABRA ESCOGIDA: " + this.palabra);
    this.charsPalabra = this.palabra.split("");
    this.charsPalabra.forEach(c => {
      this.charsGuessed.push("?");
    })
  }

  recibirLetra(char:string) {
    this.char = char.toUpperCase();
  }

  adivinarLetra(char:string) {  
    this.abecedario.forEach(c => {
      if (c.toUpperCase()!=char) this.aux.push(c);
    });
    this.abecedario = this.aux
    this.aux = [];
    if (this.charsPalabra.includes(char)) {
      this.charsPalabra.forEach(c => {
        c == char ? this.aux.push(c) : this.aux.push("?")
      })
      for (let i = 0; i<this.charsGuessed.length; i++) {
        this.charsGuessed[i] == "?" ? this.charsGuessed[i] = this.aux[i] : null
      }
    } else {
      this.fallos++;
    }
    this.aux = [];
    this.char = "";

    this.iguales();
  }

  replay() {
    window.location.reload();
    this.ngOnInit()
  }

  iguales() {
    let auxnum = 0;
    for (let i = 0; i<this.charsPalabra.length; i++) {
      if (this.charsPalabra[i] == this.charsGuessed[i]) {
        auxnum++;
      }
    }
    if (auxnum == this.charsPalabra.length)
    this.auxbool = true;
  console.log("this.auxbool " + this.auxbool)
  }
}