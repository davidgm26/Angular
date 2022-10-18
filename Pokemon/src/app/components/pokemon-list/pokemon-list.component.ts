import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });
  }
  public getPhotoURL(p: Pokemon): String {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      p.url.split('/')[6]}.png`;
  }

}
