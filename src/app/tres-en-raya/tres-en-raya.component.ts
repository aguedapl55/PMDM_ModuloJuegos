import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.css']
})
export class TresEnRayaComponent implements OnInit {
  tiles: number[] = []
  values: string[] = [];
  win: boolean = false;
  who: string = "";
  winner: string = "WINNER!";
  name: number = 9;
  tilePressed:boolean = false;

  ngOnInit(): void {
    this.who = "";
    this.tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.values = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
  }

  recibirLetra(name: number) {
    this.name = name;
    console.log("name " + name)
    this.realizarJugada(name);
  }

  async realizarJugada(name: number) {
    if (!this.win && !this.tilePressed) {
      this.tilePressed = true
      this.values[name] = "X"
      this.winCondition();
      await new Promise(f => setTimeout(f, 1000));
      if (!this.win && this.values.includes("_")) {
        let boolaux: boolean = true;
        let aux: number = 0;
        while (boolaux) {
          aux = this.tiles[Math.floor(Math.random() * this.tiles.length)]
          if (this.values[aux] == "_") boolaux = false;
        }
        this.values[aux] = "O";
      }
      this.winCondition();
      this.name = 9;
      this.tilePressed = false
    }
  }

  winCondition() {
    if (!this.win) {
      let winCondition = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
      for (let i = 0; i < winCondition.length; i++) {
        let [a, b, c] = winCondition[i];
        if (this.values[a] != "_" && this.values[a] == this.values[b] && this.values[a] == this.values[c]) {
          this.who = this.values[a];
          this.win = true;
        }
      }
      if (!this.values.includes("_") && !this.win) {
        this.winner = "TIE!";
        this.win = true;
      }
    }
  }

  replay() {
    window.location.reload();
    this.ngOnInit()
  }
}
