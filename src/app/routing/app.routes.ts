import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';


export const routes: Routes = 
[ { path: '', component: HomeComponent }, // Maps "/" to HomeComponent
  { path: 'about', component: AboutComponent },
  {
    path: 'projects',
    loadComponent: () =>
      import('../components/projects/projects.component')
        .then(c => c.ProjectsComponent)
  } 
];
