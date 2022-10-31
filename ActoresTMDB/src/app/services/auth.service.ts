import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionResponse } from '../interfaces/create-session.interface';
import { RequestTokenResponse } from '../interfaces/requestToken.interface';
import { CreateSessionDto } from '../models/dto/create-session.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  CreateRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(
      `${environment.ApiBaseUrl}/authentication/token/new?api_key=${environment.ApiKey}`
    );
  }

  //En el POST se le pasa la url y aparte el cuerpo

  CreateSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.ApiBaseUrl}/authentication/session/new?api_key=${environment.ApiKey}`,
      sessionDto
    );
  }
}
