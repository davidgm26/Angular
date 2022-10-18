import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-response.interface';
import { PokemonDetailResponse } from '../interfaces/pokemons-detail-response.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

public pokemonList(): Observable<PokemonResponse>{

return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);

}

public getPokemon(id:String){

  return this.http.get(`${API_BASE_URL}/pokemon/${id}`)

}

public getPokemonDetail(pokemon: Pokemon): Observable<PokemonDetailResponse> {
  let id = pokemon.url.split("/").reverse()[1];
  return this.http.get<PokemonDetailResponse>(`${API_BASE_URL}/pokemon/${id}`);
}






}


