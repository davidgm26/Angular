import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../interfaces/filmsResponse.interfaces';
import { PeopleResponse } from '../interfaces/peopleResponse.interface';


const API_BASE_URL = 'https://swapi.dev/api'


@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) {
  }

  public peopleList(): Observable<PeopleResponse>{
  return  this.http.get<PeopleResponse>(`${API_BASE_URL}/people`)
  }
  public getPeople(id:String){
    return this.http.get(`${API_BASE_URL}/people`)
  }

  public filmList(): Observable <FilmResponse>{
    return this.http.get<FilmResponse>(`${API_BASE_URL}/films`)
  }

  public getFilm(id:String){
    return this.http.get(`${API_BASE_URL}/films`)
  }

}
