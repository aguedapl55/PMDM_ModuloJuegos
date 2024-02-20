import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ahorcado-letra',
  templateUrl: './ahorcado-letra.component.html',
  styleUrls: ['./ahorcado-letra.component.css']
})

export class AhorcadoLetraComponent {
  @Input() nombre: string | undefined;
  @Input() imagen: string | undefined;
  
  @Output() datos = new EventEmitter<string>();

  enviarDatos() {
    this.datos.emit(this.nombre);
  }


}
