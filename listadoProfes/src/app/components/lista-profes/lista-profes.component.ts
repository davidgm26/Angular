import { Component, OnInit } from '@angular/core';
import { Profesores_fake } from '../../models/fake_data';

/*
export interface listadoProfes {
  name: string;
  modulo: String;
  edad : number;
  sexo: String;
}



Las interfaces es bueno tenerlas a parte para así compartir con el resto del programa


const ELEMENT_DATA: listadoProfes[] = [
  {name: 'Luismi' ,modulo: 'SGE',edad :85 ,sexo :'Masculino'},
  {name: 'Luismi', modulo: 'PSP',edad :40,sexo :'Masculino'},
  {name: 'Luismi', modulo: 'AD',edad :40,sexo :'Femenino'},
  {name: 'Miguel Campos',modulo: 'PMYDM',edad :40,sexo :'Masculino'},
  {name: 'PacoPP',modulo: 'FOP',edad : 50,sexo :'Masculino'},
  {name: 'Javier Bernal',modulo: 'ING',edad :60,sexo :'Masculino'},
  {name: 'Jesús Casanova', modulo: 'EIE',edad :40,sexo :'Femenino'}
];

*/

@Component({
  selector: 'app-lista-profes',
  templateUrl: './lista-profes.component.html',
  styleUrls: ['./lista-profes.component.css']
})
export class ListaProfesComponent implements OnInit {
[x: string]: any;

  displayedColumns: string[] = ['name', 'modulo'];
  listadoProfes = Profesores_fake;

  constructor() { }

  ngOnInit(): void {
  }

}
