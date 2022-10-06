import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listadoPokemon: PokemonResponse[] = [];

  constructor(private pokemonService: PokemonServiceService) { }


  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
  }

  }
}
