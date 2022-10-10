import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmResponse } from '../interfaces/filmsResponse.interfaces';



const API_BASE_URL = 'https://swapi.dev/api'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

    public filmList(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${API_BASE_URL}/films`);
  }

}
