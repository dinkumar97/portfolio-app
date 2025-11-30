import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

interface PersonalInfo {
  name?: string;
  title?: string;
  image?: string;
  phone?: string;
  email?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-sidebar.html',
  styleUrls: ['./left-sidebar.scss'],
})
export class LeftSidebarComponent implements OnInit {
  public personal: PersonalInfo | null  = null;

  constructor(private content: ContentService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.content.getPersonalInfo().subscribe((data) => {
      this.personal = data || null;
      this.cdr.detectChanges();
    }, (err) => {
      console.warn('Could not load personal-info.json', err);
    });
  }
}
