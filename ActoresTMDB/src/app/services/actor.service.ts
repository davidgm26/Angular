import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorResponse } from '../interfaces/actor.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  ApiKey ='9c8508e1f3417c3aa7fff1e8036ab73b';

  constructor(private http: HttpClient) {}

getAllActors(page:number): Observable<ActorResponse>{
  return this.http.get<ActorResponse>(`${environment.ApiBaseUrl}/person/popular?api_key=${this.ApiKey}&language=en-US&page=${page}`)
}


}
