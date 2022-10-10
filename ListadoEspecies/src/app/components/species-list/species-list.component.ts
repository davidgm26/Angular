import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/Services/species.service';
import { SpeciesResponse } from '../../Models/species.interface';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  listadoSpecies: SpeciesResponse[] = [] ;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {

  }

}
