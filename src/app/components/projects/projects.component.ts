import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'My Websitr',
      description: 'A personal portfolio website built with Angular.',
      image: 'assets/mywebsitr.png',
      link: 'https://kartiksoni1707.wixsite.com/creativity',
    },
    {
      title: 'Mask Detection',
      description: 'Image processing research on mask detection.',
      image: 'assets/mask_detection.png',
      link: 'https://github.com/yourrepo/mask-detection',
    },
    {
      title: 'Event Management Platform',
      description: 'Developed backend APIs for a large-scale event management app.',
      image: 'assets/event_management.png',
      link: 'https://whova.com',
    },
        
  ];
}
