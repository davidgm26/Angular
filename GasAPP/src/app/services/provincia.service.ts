import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProvinciaResponse } from '../interfaces/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }


  
  getAllProvincias(): Observable <ProvinciaResponse [] > {
    return this.http.get<ProvinciaResponse[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/')
  }

}
