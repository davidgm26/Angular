import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/peopleResponse.interface';


const API_BASE_URL = 'https://swapi.dev/api'


@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  constructor(private http: HttpClient) { 
  }

  public getPeopleList(): Observable<PeopleResponse>{
  return  this.http.get<PeopleResponse>(`${API_BASE_URL}/people`)
  }
}
