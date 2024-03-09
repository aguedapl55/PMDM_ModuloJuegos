import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tres-en-raya-tile',
  templateUrl: './tres-en-raya-tile.component.html',
  styleUrls: ['./tres-en-raya-tile.component.css']
})
export class TresEnRayaTileComponent {
  @Input() name : string | undefined;
  @Input() value : string | undefined;

  @Output() datos = new EventEmitter<string>();

  enviarDatos() {
    this.datos.emit(this.name);
  }
}
