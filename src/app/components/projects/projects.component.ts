import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
  tech: string[],
}
@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor() {
    // Listen for keydown events on the whole document
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }
  projects: Project[] = [
    {
      title: 'My Websitr',
      description: 'A personal portfolio website built with Angular.',
      image: 'assets/mywebsitr.png',
      link: 'https://kartiksoni1707.wixsite.com/creativity',
      details: 'This is a portfolio website showcasing my projects and skills using Angular and modern web technologies. It features a dynamic project grid, responsive design, and an interactive UI.',
      tech:["JS"],
    },
    {
      title: 'Mask Detection',
      description: 'Image processing research on mask detection.',
      image: 'assets/mask_detection.png',
      link: 'https://github.com/yourrepo/mask-detection',
      details: 'A research-based project that leverages deep learning and computer vision techniques to detect whether a person is wearing a mask in real-time images.',
      tech:[],
    },
    {
      title: 'Event Management Platform',
      description: 'Developed backend APIs for a large-scale event management app.',
      image: 'assets/event_management.png',
      link: 'https://whova.com',
      details: 'Built scalable microservices and backend APIs for an event management system, enhancing user engagement and platform efficiency. Worked on authentication, event scheduling, and data analytics features.',
      tech:[],
    }
  ];
  
  selectedProject: Project | null = null;
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.closeModal();
    }
  }
  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
