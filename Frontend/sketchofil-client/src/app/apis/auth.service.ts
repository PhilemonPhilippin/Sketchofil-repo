import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { LoginRequest } from '../models/contracts/requests/login-request';
import { RegisterRequest } from '../models/contracts/requests/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  loggedIn = false;

  login(userInput: LoginRequest): Observable<unknown> {
    const uri = 'api/auth/login?useCookies=true';

    return this.http.post(uri, userInput).pipe(
      tap(() => (this.loggedIn = true)),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  register(userInput: RegisterRequest): Observable<unknown> {
    const uri = 'api/auth/register';

    return this.http.post(uri, userInput);
  }

  logout(): Observable<unknown> {
    const uri = 'api/auth/logout';

    return this.http.post(uri, {}).pipe(
      tap(() => (this.loggedIn = false)),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  loginCheck(): Observable<boolean> {
    const uri = 'api/auth/login-check';

    return this.http.post(uri, {}).pipe(
      map(() => {
        this.loggedIn = true;
        return true;
      }),
      catchError(() => {
        this.loggedIn = false;
        return of(false);
      })
    );
  }
}
