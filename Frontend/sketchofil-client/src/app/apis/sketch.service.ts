import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SketchService {
  private http = inject(HttpClient);

  getDailySketchIdea(): Observable<string> {
    const uri = 'api/sketch/daily-idea';
    return this.http.get<string>(uri, { withCredentials: true });
  }

  getAdminTest(): Observable<string> {
    const uri = "api/sketch/admin-test";
    return this.http.get<string>(uri, { withCredentials: true });
  }
}
