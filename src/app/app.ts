import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar';
import { RightNavigationComponent } from './components/right-navigation/right-navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftSidebarComponent, RightNavigationComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'portfolio-app';
}
