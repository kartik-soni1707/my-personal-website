import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  private url = 'https://kartik-backend.vercel.app/api/track';

  constructor(private http: HttpClient) {}

  trackFirstVisit(page: string) {
    const key = `visited_${page}`;

    // Already tracked in this session?
    if (sessionStorage.getItem(key)) return;

    // Mark as tracked for this session
    sessionStorage.setItem(key, 'true');

    // Send tracking event to backend
    this.http.post(this.url, { eventType: 'first_visit', page }).subscribe();
  }
}
