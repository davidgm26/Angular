import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilmResponse } from '../interfaces/filmsResponse.interfaces';
import { PeopleResponse } from '../interfaces/peopleResponse.interface';




@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) {
  }

  public peopleList(): Observable<PeopleResponse>{
  return  this.http.get<PeopleResponse>(`${environment.API_BASE_URL}/people`)
  }
  public getPeople(id:String){
    return this.http.get(`${environment.API_BASE_URL}/people`)
  }

  public filmList(): Observable <FilmResponse>{
    return this.http.get<FilmResponse>(`${environment.API_BASE_URL}/films`)
  }

  public getFilm(id:String){
    return this.http.get(`${environment.API_BASE_URL}/films`)
  }

}
