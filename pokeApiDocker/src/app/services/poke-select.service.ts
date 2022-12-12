import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TutorialResponse } from '../interfaces/tutorial.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokeSelectService {

  constructor(private http: HttpClient) { }


  getAllTutorials(): Observable<TutorialResponse>{
    return this.http.get<TutorialResponse>('http://localhost:6868/api/tutorials')
  }

}
