import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = ["👋 Hello! I’m Kartik Soni, a passionate software engineer with a strong foundation in computer science and a keen interest in artificial intelligence and machine learning.\n" ,"With a Bachelor of Science in Computer Science from the University of Massachusetts Amherst, I have developed a diverse skill set that includes full-stack web development, machine learning, and cloud technologies.\n",
  "My experience at Whova, coupled with my research in image processing and machine learning, has equipped me to tackle complex challenges and contribute innovative solutions.\n",
  "I thrive on continuous learning and collaboration, aiming to make a meaningful impact in the tech industry."];
  

}
