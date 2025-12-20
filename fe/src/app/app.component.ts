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
}
