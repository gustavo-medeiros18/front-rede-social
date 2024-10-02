import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl = `${environment.apiBaseUrl}/photo`;
  // photos: Photo[] = [];

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
