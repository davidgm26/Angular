import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  llegada = '';
  telefono = '';
  sexo= '';
  aceptar = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  mostrarInfo() {
      console.log(this.nombre);
      console.log(this.apellidos);
      console.log(this.nif);
      console.log(this.email);
      console.log(this.telefono);
      console.log(this.llegada);
      console.log(this.sexo);
      console.log(this.aceptar);
  }


}

