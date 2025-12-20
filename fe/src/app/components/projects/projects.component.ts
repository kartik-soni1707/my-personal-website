import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../safe-url.pipe';

interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  details: string;
  tech: string[];
  video?: string;
  source_code?: string;
  youtube?:string;
}
@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf,SafeUrlPipe],
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
      title: 'Mask Detection Using CNNs',
      description: 'AI-powered application to detect whether a person is wearing a mask.',
      image: 'assets/mask_detection.png',
      link: 'https://www.linkedin.com/posts/kartik-soni-1707_ai-tensorflow-imageprocessing-activity-6684133529225314304-xNNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOVBuoBAqFJUsJwUniQs115wGitu8yQof4',
      details: 'Developed a deep learning model using CNNs with TensorFlow and Keras. Trained on a fabricated dataset for real-time mask detection.',
      tech: ['TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision'],
      video: "assets/mask_unmask.mp4",
    },
    {
      title: 'Sleep Detection from Wrist Accelerometer Data',
      description: 'Sleep onset and wake detection using time-series wrist accelerometer data.',
      image: 'assets/sleep_detection.png',
      details: 'Built an ML pipeline using RNNs and Random Forests to analyze wrist accelerometer data, improving sleep state prediction. Optimized memory for 127M-row dataset.',
      tech: ['RNN', 'Random Forest', 'Time Series', 'Machine Learning'],
    },
    {
      title: 'AI-Powered Loan Prediction',
      description: 'Machine learning model for fraud detection and loan approval.',
      image: 'assets/loan_prediction.png',
      link: 'https://github.com/kartik-soni1707/Ai-Powered-Loan-Heroku-',
      details: 'Deployed a web-based ML model using Python. Utilized hyperparameter tuning to improve fraud detection and loan approval predictions.',
      tech: ['Python', 'Scikit-Learn', 'Machine Learning', 'Flask'],
    },
    {
      title: 'Robotics IoT Project',
      description: 'Autonomous wireless robot with YouTube livestream.',
      image: 'assets/robotics_iot.png',
      link: 'https://www.youtube.com/@gadgetguy6651',
      details: 'Developed an obstacle detection and avoidance system using Raspberry Pi. Enabled real-time video streaming to YouTube.',
      tech: ['Raspberry Pi', 'IoT', 'Obstacle Detection', 'Python'],
      youtube:'https://www.youtube.com/embed/lFT1fCSQSuI',
    },
    {
      title: 'Spam Filter Using NLP',
      description: 'AI-driven spam detection system using NLP.',
      image: 'assets/spam_filter.png',
      link: 'https://www.linkedin.com/posts/kartik-soni-1707_nlp-internship-activity-6671122970318135296-Fr9G?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOVBuoBAqFJUsJwUniQs115wGitu8yQof4',
      details: 'Built a spam classification model using Naïve Bayes and NLP techniques to filter unwanted SMS and emails. Automated spam detection and blocking.',
      tech: ['NLP', 'Naïve Bayes', 'Text Classification', 'Python'],
      video: "assets/spam_filter.mp4",
    },
    {
      title: 'UMass Amherst - ML Research',
      description: 'Research on deep learning for disease detection.',
      image: 'assets/umass_research.png',
      link: 'https://drive.google.com/file/d/1F8g_FJjqosQlJ8CYwmyXB5fZ1xOZIgRl/view?usp=sharing',
      details: 'Worked under Prof. Jaime Davila to classify images for disease detection using CNNs. Achieved a 91% F1-score with hyperparameter tuning.',
      tech: ['CNN', 'Deep Learning', 'TensorFlow', 'Data Augmentation'],
    },
  ];
  
  selectedProject: Project | null = null;
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.closeModal();
    }
  }
  openModal(project: Project) {
    this.selectedProject = project;
    this.callBackend();
  }

  closeModal() {
    this.selectedProject = null;
  }

  callBackend() {
    if (this.selectedProject!=null && this.selectedProject.title==="Sleep Detection from Wrist Accelerometer Data"){
      fetch('/api/hello')  // use proxy locally if Angular is on 4200
        .then(res => res.json())
        .then(data => {
          console.log('Backend response:', data);
        })
        .catch(err => console.error('Error calling backend:', err));
    }
 }
}
