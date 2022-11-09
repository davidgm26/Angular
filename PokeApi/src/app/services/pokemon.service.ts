import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokedexResponse } from '../interfaces/pokedexResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getAllPokedex(): Observable<PokedexResponse>{
   return this.http.get<PokedexResponse>(`${environment.apiBaseURL}/pokemon?offset=0&limit=151`)
  }



}
