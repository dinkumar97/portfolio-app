import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  skills: Skill[] = [
    {
      title: 'Angular & TypeScript Development',
      description: 'Expert in building scalable, high-performance web applications using Angular and TypeScript with focus on clean architecture and maintainability.',
      iconColor: '#9C27B0', // Purple
      bgColor: '#FFE8F0', // Light Pink
      icon: 'code'
    },
    {
      title: 'Micro Frontend Architecture',
      description: 'Designed reusable frontend architecture patterns to optimize shared libraries across micro frontend environments.',
      iconColor: '#2196F3', // Blue
      bgColor: '#E8F4FF', // Light Blue
      icon: 'layers'
    },
    {
      title: 'Performance Optimization',
      description: 'Enhanced frontend performance by implementing efficient rendering, lazy-loading strategies, and optimization techniques improving page load by 30%.',
      iconColor: '#F44336', // Red
      bgColor: '#FFE8F0', // Light Pink
      icon: 'zap'
    },
    {
      title: 'Reusable Component Design',
      description: 'Developed modular, reusable components reducing development time across projects while ensuring scalability and maintainability.',
      iconColor: '#4CAF50', // Green
      bgColor: '#E8FFF0', // Light Mint
      icon: 'grid'
    },
    {
      title: 'Agile & Code Reviews',
      description: 'Collaborated with Agile teams to achieve sprint deliverables and conducted comprehensive code reviews ensuring adherence to design principles.',
      iconColor: '#E91E63', // Magenta
      bgColor: '#FFE8F0', // Light Pink
      icon: 'users'
    },
    {
      title: 'RESTful API Integration',
      description: 'Integrated frontend applications with RESTful APIs ensuring smooth data flow, high responsiveness, and overall software stability.',
      iconColor: '#FF9800', // Orange
      bgColor: '#FFF0E8', // Light Peach
      icon: 'database'
    }
  ];
}
