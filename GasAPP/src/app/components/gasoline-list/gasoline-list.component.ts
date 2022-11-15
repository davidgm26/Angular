import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuelStationResponse } from 'src/app/interfaces/gasolineras.interface';
import { GasolineService } from 'src/app/services/gasoline.service';

@Component({
  selector: 'app-gasoline-list',
  templateUrl: './gasoline-list.component.html',
  styleUrls: ['./gasoline-list.component.css'],
})
export class GasolineListComponent implements OnInit {
  fuels = new FormControl('');
  seleccion: string ='';
  listaGasolineras: FuelStationResponse[] = [];
  listaGasolinerasFiltradas: FuelStationResponse [] =[];
  fuelName: string[] = [
    'Gasóleo A',
    'Gasolina 95 E5',
    'Hidrógeno',
  ];
  max = 0;
  precioBiodiesel: number = 0;
  precioGasoleo: number = 0;
  precioGasolina: number = 0;

  constructor(private gasolineraService: GasolineService) {}

  ngOnInit(): void {
    this.getFuelStationList();
  }

  getFuelStationList() {
    this.gasolineraService.getAllFuelStation().subscribe((resp) => {
      this.listaGasolineras = resp.ListaEESSPrecio;
    });

  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}


