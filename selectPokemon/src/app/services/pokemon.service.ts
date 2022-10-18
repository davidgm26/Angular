import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonResponse, Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<PokemonResponse>{

    return this.http.get<PokemonResponse>(`${environment.API_BASE_URL}/pokemon`);

    }

    public getPokemon(id:String){

      return this.http.get(`${environment.API_BASE_URL}/pokemon/${id}`)

    }

    public getPokemonDetail(pokemon: Pokemon): Observable<PokemonResponse> {
      let id = pokemon.url.split("/").reverse()[1];
      return this.http.get<PokemonResponse>(`${environment.API_BASE_URL}/pokemon/${id}`);
    }



}
