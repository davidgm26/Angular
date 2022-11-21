import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MunicipioResponse } from '../interfaces/munipio.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }


  getAllMunicipiosPorProvincia(idProvincia: string): Observable <MunicipioResponse [] > {
    return this.http.get<MunicipioResponse[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${idProvincia}`)
  }


}
