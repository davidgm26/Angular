import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokedexResponse.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokedex: Pokemon[]=[];
  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.pokemonService.getAllPokedex().subscribe(resp=>{
      this.pokedex = resp.results   
    });
  }

  
}
