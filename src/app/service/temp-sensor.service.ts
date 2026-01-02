import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // makes it globally available
})
export class TempSensorService {

  private apiUrl = 'https://kartik-backend.vercel.app/api/temp_sensor';

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
