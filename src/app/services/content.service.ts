import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(private http: HttpClient) {}

  getPersonalInfo(): Observable<any> {
    return this.http.get('assets/content/personal-info.json');
  }

  getAbout(): Observable<any> {
    return this.http.get('assets/content/about.json');
  }

  getResume(): Observable<any> {
    return this.http.get('assets/content/resume.json');
  }

  getProjects(): Observable<any> {
    return this.http.get('assets/content/projects.json');
  }
}
