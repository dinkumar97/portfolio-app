import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(private http: HttpClient) {}

  private fetchJsonWithFallback<T>(url: string, importPath: string): Observable<T> {
    // First attempt: HTTP GET as text (so if an HTML index is returned we can detect it)
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(text => {
        try {
          return JSON.parse(text) as T;
        } catch (e) {
          return null as unknown as T;
        }
      }),
      switchMap(parsed => {
        if (parsed) return of(parsed);
        // fallback to dynamic import of JSON (requires resolveJsonModule)
        return from(import(importPath).then(m => (m.default || m) as T));
      })
    );
  }

  getPersonalInfo(): Observable<any> {
    return this.fetchJsonWithFallback<any>('assets/content/personal-info.json', '../../assets/content/personal-info.json');
  }

  getAbout(): Observable<any> {
    return this.fetchJsonWithFallback<any>('assets/content/about.json', '../../assets/content/about.json');
  }

  getResume(): Observable<any> {
    return this.fetchJsonWithFallback<any>('assets/content/resume.json', '../../assets/content/resume.json');
  }

  getProjects(): Observable<any> {
    return this.fetchJsonWithFallback<any>('assets/content/projects.json', '../../assets/content/projects.json');
  }
}
