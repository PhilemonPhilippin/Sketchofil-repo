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
    const uri = 'api/login?useCookies=true';

    return this.http.post(uri, userInput, { withCredentials: true });
  }

  register(userInput: RegisterRequest): Observable<unknown> {
    const uri = 'api/register';
    return this.http.post(uri, userInput);
  }
}
