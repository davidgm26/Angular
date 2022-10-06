import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {


  listaComida: String[]= ['pizza','kebab','hamburguesa','pollo','papas fritas']

  busqueda = 'string'

  constructor() { }

  ngOnInit(): void {
  }
buscar(arg: string) {

var buscados =[]

  for (let index = 0; index < this.listaComida.length; index++) {
    if (this.listaComida[index].includes(arg)) {
      buscados.push(this.listaComida[index])
    }
  }
};

}

