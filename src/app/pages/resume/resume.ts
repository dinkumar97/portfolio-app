import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class ResumeComponent {
  experiences: Experience[] = [
    {
      role: 'Specialist Software Engineer',
      company: 'LTIMindtree',
      location: 'Coimbatore, India',
      period: 'July 2024 – Present',
      responsibilities: [
        'Enhanced frontend performance by implementing efficient rendering and lazy-loading strategies.',
        'Designed a reusable frontend architecture pattern to optimize shared libraries across micro frontend environments.',
        'Collaborated with Agile teams to plan and achieve sprint deliverables within timelines.',
        'Conducted comprehensive code reviews ensuring adherence to design principles and clean coding standards.'
      ]
    },
    {
      role: 'Software Engineer – Frontend',
      company: 'Kovai Systems India Pvt. Ltd.',
      location: 'Coimbatore, India',
      period: 'March 2021 – July 2024',
      responsibilities: [
        'Developed and maintained modular, reusable components using Angular and TypeScript, reducing development time across projects.',
        'Implemented front-end optimization techniques improving page load performance by 30%.',
        'Participated in cross-functional code review panels to ensure scalability and maintainability.',
        'Integrated frontend applications with RESTful APIs and enhanced overall software stability.',
        'Contributed to Agile ceremonies, improving sprint velocity and release predictability.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Adorn Consultant Pvt. Ltd.',
      location: 'Coimbatore, India',
      period: 'April 2019 – March 2021',
      responsibilities: [
        'Developed dynamic, responsive web interfaces using Angular and TypeScript.',
        'Built modular frontend services and components to support scalable application structures.',
        'Integrated backend systems via RESTful APIs ensuring smooth data flow and high responsiveness.',
        'Optimized UI elements to enhance performance and user experience across devices.'
      ]
    }
  ];

  education: Education[] = [
    {
      degree: 'Master of Science in Information Technology',
      institution: 'Sri Ramakrishna College of Arts and Science',
      location: 'Coimbatore, India',
      year: 'April 2019'
    },
    {
      degree: 'Bachelor of Science in Computer Applications',
      institution: 'SNR and Sons College of Arts and Science',
      location: 'Coimbatore, India',
      year: 'June 2017'
    }
  ];

  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'JavaScript (ES6+)']
    },
    {
      category: 'Architecture',
      skills: ['Micro Frontend', 'Reusable Components', 'Modular Design']
    },
    {
      category: 'Performance',
      skills: ['Optimization', 'Lazy Loading', 'Debugging', 'Code Reviews']
    },
    {
      category: 'Integration',
      skills: ['RESTful APIs', 'Backend Integration']
    },
    {
      category: 'Methodology',
      skills: ['Agile', 'Scrum', 'Clean Architecture']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Version Control']
    }
  ];
}
