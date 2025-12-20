import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template:`
  <app-navbar/>
  <router-outlet></router-outlet> <!-- Add this line to load routed components -->
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-personal-website';
  constructor() {
    // Call your Vercel serverless function immediately
    this.callBackend();
  }
  callBackend() {
    fetch('/api/hello')  // use proxy locally if Angular is on 4200
      .then(res => res.json())
      .then(data => {
        console.log('Backend response:', data["message"]);
      })
      .catch(err => console.error('Error calling backend:', err));
  }
}
