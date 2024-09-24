import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from './photo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiPhoto {
  id: number;
  userId: number;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  links: { rel: string; href: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = `${environment.apiBaseUrl}/photo`;

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<Photo[]> {
    return this.http
      .get<ApiPhoto[]>(this.apiUrl)
      .pipe(map((apiPhotos) => apiPhotos.map(this.mapApiPhotoToPhoto)));
  }

  private mapApiPhotoToPhoto(apiPhoto: ApiPhoto): Photo {
    return {
      imageFile: new File([], apiPhoto.url),
      description: apiPhoto.description,
      userId: apiPhoto.userId,
    };
  }
}
