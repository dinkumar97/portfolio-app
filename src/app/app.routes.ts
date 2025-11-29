import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { ResumeComponent } from './pages/resume/resume';
import { WorkComponent } from './pages/work/work';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'work', component: WorkComponent },
    { path: '**', redirectTo: '/about' }
];
