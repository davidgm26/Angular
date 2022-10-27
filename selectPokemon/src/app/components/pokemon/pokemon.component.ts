import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  selected!: Pokemon;
  pokemones: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemones= response.results;
    });
  }

  getPhotoURL(): String{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
this.selected.url.split('/')[6]}.png`;
  }
  }


