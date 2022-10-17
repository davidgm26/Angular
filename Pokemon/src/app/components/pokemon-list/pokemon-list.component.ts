import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonInfoDialogComponent } from 'src/app/dialogs/pokemon-info-dialog/pokemon-info-dialog.component';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonDetailResponse } from 'src/app/interfaces/pokemons-detail-response.interface';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];
  pokemonSelected: PokemonDetailResponse | undefined;


  constructor(private pokemonService: PokemonServiceService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }
  public getPhotoURL(p: Pokemon): String {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      p.url.split('/')[6]}.png`;
  }

  getPokemonInfo(pokemon: Pokemon) {
    this.pokemonService.getPokemonDetail(pokemon).subscribe(response => {
      this.pokemonSelected = response;
      this.dialog.open(PokemonInfoDialogComponent, {
        data: {
          pokemonInfo: this.pokemonSelected,
          color: '#FF0000'
        },
      });
    });
  }

}
