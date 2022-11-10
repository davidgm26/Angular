import { Component, Input, OnInit } from '@angular/core';
import { FuelStationResponse } from 'src/app/interfaces/gasolineras.interface';

@Component({
  selector: 'app-gasoline-card',
  templateUrl: './gasoline-card.component.html',
  styleUrls: ['./gasoline-card.component.css']
})
export class GasolineCardComponent implements OnInit {

 @Input() gasolinera: FuelStationResponse = {} as FuelStationResponse
 @Input() seleccionado!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
