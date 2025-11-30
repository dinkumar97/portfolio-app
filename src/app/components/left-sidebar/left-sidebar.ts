import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

interface PersonalInfo {
  name?: string;
  title?: string;
  profilePhoto?: string;
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
  public personal: PersonalInfo = {};

  constructor(private content: ContentService) {}

  ngOnInit(): void {
    this.content.getPersonalInfo().subscribe((data) => {
      this.personal = data || {};
    }, (err) => {
      console.warn('Could not load personal-info.json', err);
    });
  }
}
