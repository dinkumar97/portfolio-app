import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-right-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './right-navigation.html',
  styleUrl: './right-navigation.scss'
})
export class RightNavigationComponent {
  navItems = [
    { path: '/about', label: 'About', icon: 'user' },
    { path: '/resume', label: 'Resume', icon: 'file' },
    { path: '/work', label: 'Work', icon: 'briefcase' }
  ];
}
