import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackingService } from './service/tracking.service';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ChatWidgetComponent],
  template:`
  <app-navbar [childData]='title'/>
  <router-outlet></router-outlet> <!-- Add this line to load routed components -->
  <app-chat-widget></app-chat-widget>
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
