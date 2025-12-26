import { NgFor, NgIf } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { Chart } from 'chart.js/auto';
import { ActivatedRoute, Router } from '@angular/router';

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
  chart?:string;
  id:string;
}
@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf,SafeUrlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit{
  constructor(private router: Router,private route: ActivatedRoute) {
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
      id: "mask-detect"
    },
    {
      title: 'Temperature and Humidity monitoring using Raspberry Pi',
      description: 'Room temperature & humidity monitoring using Raspberry Pi (Python), Node.js backend, and PostgreSQL database',
      details: 'Data Loading Pls Wait. Rpi (DHT11 sensor)->Python->PostgresSQL(DB)->Node Js(BE)->Angular(FE)',
      tech: ['Python', 'PostgresSQL', 'Node Js',],
      id: 'temp-sensor',
      link: 'https://github.com/kartik-soni1707/tempsensor'
    },
    {
      title: 'Integrating Kubernetes with CI/CD',
      description: 'Automated CI/CD pipeline execution on a Kubernetes cluster.',
      details: 'Designed and implemented a robust CI/CD pipeline on Google Kubernetes Engine (GKE) using GitLab CI .gitlab-ci.yml, Helm charts, and kubectl for cluster management. Leveraged Kubernetes’ autoscaling capabilities to run multiple CI/CD jobs in parallel, significantly improving computational efficiency and reducing idle resource costs. Automated build, test, and deployment workflows ensured scalable, reliable, and cost-effective delivery of applications while optimizing cluster utilization and simplifying operational management.',
      tech: ['CI/CD', 'Kubernetes', 'Helm', 'GKE'],
      id: "ci-cd",
      youtube: "https://drive.google.com/file/d/1_tPNogqlD5amkajQQZTt633T2_YMZeL6/preview",
    },
    {
      title: 'Robotics IoT Project',
      description: 'Autonomous wireless robot with YouTube livestream.',
      image: 'assets/robotics_iot.png',
      link: 'https://www.youtube.com/@gadgetguy6651',
      details: 'Developed an obstacle detection and avoidance system using Raspberry Pi. Enabled real-time video streaming to YouTube.',
      tech: ['Raspberry Pi', 'IoT', 'Obstacle Detection', 'Python'],
      youtube:'https://www.youtube.com/embed/lFT1fCSQSuI',
      id: "robotics-project"
    },
    {
      title: 'Spam Filter Using NLP',
      description: 'AI-driven spam detection system using NLP.',
      image: 'assets/spam_filter.png',
      link: 'https://www.linkedin.com/posts/kartik-soni-1707_nlp-internship-activity-6671122970318135296-Fr9G?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOVBuoBAqFJUsJwUniQs115wGitu8yQof4',
      details: 'Built a spam classification model using Naïve Bayes and NLP techniques to filter unwanted SMS and emails. Automated spam detection and blocking.',
      tech: ['NLP', 'Naïve Bayes', 'Text Classification', 'Python'],
      video: "assets/spam_filter.mp4",
      id: 'spam-filter'
    },
    {
      title: 'UMass Amherst - ML Research',
      description: 'Research on deep learning for disease detection.',
      image: 'assets/umass_research.png',
      youtube: 'https://drive.google.com/file/d/1F8g_FJjqosQlJ8CYwmyXB5fZ1xOZIgRl/preview',
      details: 'Worked under Prof. Jaime Davila to classify images for disease detection using CNNs. Achieved a 91% F1-score with hyperparameter tuning.',
      tech: ['CNN', 'Deep Learning', 'TensorFlow', 'Data Augmentation'],
      id: "ml-research"
    },
  ];
 ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.openProjectModal(id);
      }
    });
  }
openProjectModal(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.click(); // triggers your modal opening logic
    }
  }
drawChart(data: any) {
  const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  
  const labels = data.map((row: any) =>
    new Date(row.recorded_at).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  }));

  const temperatureValues = data.map((row: any) => row.temperature);
  const humidityValues = data.map((row: any) => row.humidity);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatureValues,
          borderColor: 'red',
          backgroundColor: 'rgba(255,0,0,0.1)',
          borderWidth: 2,
        },
        {
          label: 'Humidity (%)',
          data: humidityValues,
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)',
          borderWidth: 2,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}

  
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
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { id: null },
      queryParamsHandling: 'merge', // keep other query params
    });
  }
  callBackend(){
    if(this.selectedProject?.id==="temp-sensor"){
      this.selectedProject.chart="true";
      fetch("https://kartik-backend.vercel.app/api/temp_sensor")
      .then(data=>data.json())
      .then(data=>{
        this.drawChart(data);
        console.log(data);
      })
      .catch(error=>console.log(error));
    }
  }
}
