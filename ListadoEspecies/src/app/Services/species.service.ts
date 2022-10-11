import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SpeciesResponse } from '../Models/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }


  public getSpecie(page: number): Observable<SpeciesResponse>{
    return  this.http.get<SpeciesResponse>(`${environment.API_BASE_URL}/species?page=${page}`)
    }
}
