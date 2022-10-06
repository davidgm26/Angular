import { Component, OnInit } from '@angular/core';

export interface listadoAlums {
  name: string;
  surname: String;
  birthdate: String;
  curse: string;
}

const ELEMENT_DATA: listadoAlums[] = [
  { name: 'Mario', surname: 'Ruiz', birthdate: '05/08/2002', curse: '1º DAM' },
  {
    name: 'Antonio',
    surname: 'Ruiz',
    birthdate: '05/08/2002',
    curse: '1º DAM',
  },
  { name: 'Jose', surname: 'Ruiz', birthdate: '05/08/2002', curse: '1º DAM' },
];

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'birthdate', 'curse'];
  listado = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  changeVisibility(columna: string) {
    debugger;
    let indice = this.displayedColumns.indexOf(columna);

    if (indice == -1) {
      this.displayedColumns.push(columna);
    }else{
      this.displayedColumns.splice(indice, 1);
    }
  }
}
