import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/film-dialog.interfaces';
import { Film } from 'src/app/interfaces/filmsResponse.interfaces';

@Component({
  selector: 'app-films-list-dialog',
  templateUrl: './films-list-dialog.component.html',
  styleUrls: ['./films-list-dialog.component.css'],
})
export class FilmsListDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
  public getFilmPhotoURL(f: Film): String {
    return `https://starwars-visualguide.com/assets/img/films/${
      f.url.split('/')[5]
    }.jpg`;
  }
}
