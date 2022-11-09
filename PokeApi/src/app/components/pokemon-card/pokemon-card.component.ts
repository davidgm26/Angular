import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokedexResponse.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

@Input() pokemon!: Pokemon;  

id = ''

  constructor() {}

  ngOnInit(): void {
  }

  getPokemonPhoto(): String{
      this.id = this.pokemon.url.split('/')[6];
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.url.split('/')[6]}.png`;
    }
  }


