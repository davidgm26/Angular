import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FuelStationList } from '../interfaces/gasolineras.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineService {

  constructor(private http: HttpClient) { }

getAllFuelStation():Observable <FuelStationList>{
 return this.http.get<FuelStationList>(`${environment.apiBaseUrl}`)
}



}
