import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(userInput: { email: string; password: string }): Observable<unknown> {
    const uri = 'api/login?useCookies=true';

    return this.http.post(uri, userInput, { withCredentials: true });
  }
}
