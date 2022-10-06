import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/filmsResponse.interfaces';
import { People } from 'src/app/interfaces/peopleResponse.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {


  peopleList: People[] = [];

  listadoPeliculas: Film[] = [];

  constructor(
    private peopleService: PeopleService,

    ) {}

  ngOnInit(): void {
    this.peopleService.peopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
    this.peopleService.filmList().subscribe((resp => {
      this.listadoPeliculas = resp.results
    }))
  }

  public getPhotoURL(p: People): String {
    return `https://starwars-visualguide.com/assets/img/characters/${
      p.url.split('/')[5]
    }.jpg`;
  }

}
