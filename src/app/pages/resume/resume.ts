import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

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
  styleUrls: ['./resume.scss']
})
export class ResumeComponent implements OnInit {
  experiences: Experience[] = [];

  education: Education[] = [];

  skillGroups: SkillGroup[] = [];

  constructor(private content: ContentService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.content.getResume().subscribe((data) => {
      this.experiences = data?.experience ?? [];
      this.education = data?.education ?? [];
      this.skillGroups = data?.skillGroups ?? [];
      this.cdr.detectChanges();
    }, (err) => {
      console.warn('Could not fetch resume content', err);
    });
  }
}
