import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent implements OnInit {

  listaEducForm:EducacionFormacion[] = [];
  listaCursos:EducacionFormacion[] = [];
  listaCompDig:String[] = [];
  listaIdiomas:EducacionFormacion[] = [];
  listaInfo:EducacionFormacion[] = [];
  
  ngOnInit(): void {
    this.addDatos();
    
  }

  addDatos(): void {
    this.listaEducForm = [
      new EducacionFormacion("Desarrollo de Aplicaciones Multiplataforma", "2022 a 2024 - IES Doctor Fleming", "Programación Multimedia y Dispositivos Móviles, Programación de Servicios y Procesos, Acceso a Datos, Sistemas informáticos"),
      new EducacionFormacion("Bachillerato de Ciencias de la Salud", "2020 a 2022 - IES Pérez de Ayala", "Matemáticas II, Biología, Química, Tecnologías de la Información y la Comunicación II")
    ];
    this.listaCursos = [
      new EducacionFormacion("Análisis del Malware", "2023 - OpenWebinars", ""), 
      new EducacionFormacion("Introducción a la Ciberseguridad", "2023 - OpenWebinars", ""), 
      new EducacionFormacion("Triage Informático", "2023 - OpenWebinars", "")
    ];
    this.listaCompDig = ["Programación en Java", "SQL", "HTML y CSS", "Microsoft Office", "Angular"
    ];
    this.listaIdiomas = [
      new EducacionFormacion("Español", "", "Nativo"), 
      new EducacionFormacion("Inglés", "", "C1 Escuela Oficial de Idiomas"), 
    ]
    this.listaInfo = [
      new EducacionFormacion("Permiso de Conduccion", "", "Permiso B")
    ]
  }
}

class EducacionFormacion {
  titulo: string; 
  espaciotiempo: string;
  desc:string | undefined;

  constructor(tit:string, st:string, d:string) {
    this.titulo = tit; 
    this.espaciotiempo = st;
    this.desc = d;
  } 
}