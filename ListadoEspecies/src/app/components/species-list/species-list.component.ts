import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/Services/species.service';
import { Specie } from '../../Models/species.interface';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css'],
})
export class SpeciesListComponent implements OnInit {
  listadoSpecies: Specie[] = [];
  numPages = 0;
 

  constructor(private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.getSpeciePage(1);    
  }

  public getPhotoURL(s: Specie): String {
    return `https://starwars-visualguide.com/assets/img/species/${
      s.url.split('/')[5]
    }.jpg`;
  }

  public getSpeciePage(page: number) {
    this.speciesService.getSpecie(page).subscribe(resp => {
      this.listadoSpecies = resp.results;
      this.numPages = Math.ceil(resp.count /10);
    });
  }
  counter() {
    return new Array(this.numPages);
  }
}
