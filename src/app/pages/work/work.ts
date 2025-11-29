import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.scss'
})
export class WorkComponent {
  projects: Project[] = [
    {
      title: 'Enterprise Micro Frontend Platform',
      category: 'Architecture',
      description: 'A scalable micro frontend architecture enabling multiple teams to contribute to a unified enterprise application. Implemented shared libraries and lazy loading strategies.',
      image: 'assets/project1.jpg', // Placeholder
      tags: ['Angular', 'TypeScript', 'Micro Frontends', 'RxJS'],
      color: '#E8F4FF' // Light Blue
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Web Application',
      description: 'High-performance analytics dashboard for visualizing complex data sets. Optimized rendering performance by 30% using virtual scrolling and efficient change detection.',
      image: 'assets/project2.jpg', // Placeholder
      tags: ['Angular', 'Highcharts', 'SCSS', 'Performance'],
      color: '#FFE8F0' // Light Pink
    },
    {
      title: 'E-commerce Customer Portal',
      category: 'Responsive UI',
      description: 'Dynamic customer-facing portal with seamless REST API integration. Features responsive design for optimal experience across all devices.',
      image: 'assets/project3.jpg', // Placeholder
      tags: ['Angular', 'REST API', 'Responsive Design', 'Bootstrap'],
      color: '#E8FFF0' // Light Mint
    }
  ];
}
