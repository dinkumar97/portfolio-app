import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, HostListener } from '@angular/core';
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
  public personal: PersonalInfo | null = null;
  public isMobile: boolean = false;
  public isExpanded: boolean = false;

  constructor(
    private content: ContentService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.checkScreenSize();
    this.content.getPersonalInfo().subscribe(
      (data) => {
        this.personal = data || null;
        this.cdr.detectChanges();
      },
      (err) => {
        console.warn('Could not load personal-info.json', err);
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isExpanded = true; // Always expanded on desktop
    } else {
      this.isExpanded = false; // Collapsed by default on mobile
    }
  }

  toggleAccordion() {
    if (this.isMobile) {
      this.isExpanded = !this.isExpanded;
    }
  }
}
