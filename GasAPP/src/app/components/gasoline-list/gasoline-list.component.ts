import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuelStationResponse } from 'src/app/interfaces/gasolineras.interface';
import { MunicipioResponse } from 'src/app/interfaces/munipio.interface';
import { ProvinciaResponse } from 'src/app/interfaces/provincia.interface';
import { GasolineService } from 'src/app/services/gasoline.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-gasoline-list',
  templateUrl: './gasoline-list.component.html',
  styleUrls: ['./gasoline-list.component.css'],
})
export class GasolineListComponent implements OnInit {
  fuels = new FormControl('');
  seleccion: string = '';
  provinciaSelected!: ProvinciaResponse;
  municipioSelected!: MunicipioResponse;
  listaGasolineras: FuelStationResponse[] = [];
  listaGasolinerasFiltradas: FuelStationResponse[] = [];
  fuelName: string[] = ['Gasóleo A', 'Gasolina 95 E5', 'Hidrógeno'];
  max = 0;
  precioBiodiesel: number = 0;
  precioGasoleo: number = 0;
  precioGasolina: number = 0;
  listaProvincias: ProvinciaResponse[] = [];
  listaMunicipios: MunicipioResponse[] = [];
  myControl = new FormControl();


  constructor(
    private gasolineraService: GasolineService,
    private provinciaService: ProvinciaService,
    private municipioService: MunicipioService
  ) {}


  ngOnInit(): void {
    this.getProvinciaList();
    this.getFuelStationList();
  }

  getFuelStationList() {
    this.gasolineraService.getAllFuelStation().subscribe((resp) => {
      this.listaGasolineras = resp.ListaEESSPrecio;
    });
  }

  getProvinciaList() {
    this.provinciaService.getAllProvincias().subscribe((resp) => {
      this.listaProvincias = resp;
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  getFilteredFuelStationPorProvincia() {
    debugger;
    this.listaGasolinerasFiltradas = this.listaGasolineras.filter((gas) => gas['Provincia'] == this.provinciaSelected.Provincia);

    this.getMunicipioPorProvincia();

    console.log(this.listaGasolinerasFiltradas);
  }

  getFilteredFuelStationPorMunicipio() {
    debugger;
    this.listaGasolinerasFiltradas = this.listaGasolineras.filter((gas) => gas['Municipio'] == this.municipioSelected.Municipio);
  }

  getMunicipioPorProvincia() {
    this.municipioService
      .getAllMunicipiosPorProvincia(this.provinciaSelected.IDPovincia)
      .subscribe((resp) => {
       this.listaMunicipios = resp
      });
  }
}
