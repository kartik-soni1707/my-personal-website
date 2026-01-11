import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  private apiUrl = 'https://kartik-backend.vercel.app/api/contact_me';

  constructor(private http: HttpClient) { }

  send(name: string, email: string, message: string): Observable<any> {
    const body = { name, email, message };
    return this.http.post<any>(this.apiUrl, body);
  }
}
