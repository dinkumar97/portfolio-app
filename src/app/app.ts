import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar';
import { RightNavigationComponent } from './components/right-navigation/right-navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSidebarComponent, RightNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
