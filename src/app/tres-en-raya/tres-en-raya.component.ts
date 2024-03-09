import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.css']
})
export class TresEnRayaComponent implements OnInit {
  availableTiles:string[] = []
  values:string[] = [];
  placeholder:string = "X";

  ngOnInit(): void {
      this.availableTiles = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
      this.values = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  }
}
