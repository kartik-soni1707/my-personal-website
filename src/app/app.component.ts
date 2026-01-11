import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackingService } from './service/tracking.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template:`
  <app-navbar [childData]='title'/>
  <router-outlet></router-outlet> <!-- Add this line to load routed components -->
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-personal-website';
  constructor(private tracking: TrackingService){}
  ngOnInit(){
    this.tracking.trackFirstVisit('home');
  }
}
