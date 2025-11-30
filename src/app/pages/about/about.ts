import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

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
export class AboutComponent implements OnInit {
  skills: Skill[] = [];
  greeting?: string;
  bio?: string;

  constructor(private content: ContentService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.content.getAbout().subscribe((data) => {
      this.skills = data?.skills ?? [];
      this.greeting = data?.greeting ?? 'Hey there 👋,';
      this.bio = data?.bio ?? this.bio;
      this.cdr.detectChanges();
    }, (err) => {
      console.warn('Could not fetch about content', err);
    });
  }
}
