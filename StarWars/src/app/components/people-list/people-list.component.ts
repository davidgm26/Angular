import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Film } from 'src/app/interfaces/filmsResponse.interfaces';
import { People } from 'src/app/interfaces/peopleResponse.interface';
import { FilmService } from 'src/app/services/film.service';
import { PeopleService } from 'src/app/services/people.service';
import { FilmsListDialogComponent } from '../films-list-dialog/films-list-dialog.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {


  peopleList: People[] = [];

  listadoPeliculas: Film[] = [];

  filmSelected: Film | undefined;

  constructor(
    private peopleService: PeopleService,
    private dialog: MatDialog,
    private filmService: FilmService

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

  openDialog(film:Film){
    this.dialog.open(FilmsListDialogComponent,{
      data: {
        titulo:film.title
      }
      })
  }

}
