import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

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
  styleUrls: ['./work.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];

  constructor(private content: ContentService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.content.getProjects().subscribe((data) => {
      this.projects = data || [];
      this.cdr.detectChanges();
    }, (err) => {
      console.warn('Could not fetch projects', err);
      // fallback: empty
      this.projects = [];
    });
  }
}
