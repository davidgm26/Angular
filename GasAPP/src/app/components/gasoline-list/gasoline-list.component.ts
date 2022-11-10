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
  fuelName: string[] = [
    'Biodesel',
    'Bioetanol',
    'Gas Natural Comprimido',
    'Gas Natural Licuado',
    'Gases Licuados del Petróleo',
    'Gasóleo A',
    'Gasóleo B',
    'Gasóleo Premium',
    'Gasolina 95 E10',
    'Gasolina 95 E5',
    'Gasolina 95 E5 Premium',
    'Gasolina 98 E10',
    'Gasolina 98 E5',
    'Hidrógeno',
  ];

  constructor(private gasolineraService: GasolineService) {}

  ngOnInit(): void {
    this.getFuelStationList();
  }

  getFuelStationList() {
    this.gasolineraService.getAllFuelStation().subscribe((resp) => {
      this.listaGasolineras = resp.ListaEESSPrecio;
    });
  }

  getMinPrice(){

  }
}
