import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/contracts/requests/login-request';
import { RegisterRequest } from '../models/contracts/requests/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(userInput: LoginRequest): Observable<unknown> {
    const uri = 'api/auth/login?useCookies=true';

    return this.http.post(uri, userInput);
  }

  register(userInput: RegisterRequest): Observable<unknown> {
    const uri = 'api/auth/register';
    return this.http.post(uri, userInput);
  }

  logout(): Observable<unknown> {
    const uri = 'api/auth/logout';
    return this.http.post(uri, {});
  }
}
