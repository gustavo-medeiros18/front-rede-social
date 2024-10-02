import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = `${environment.apiBaseUrl}/user`;

  constructor(private http: HttpClient) {}

  /**
   * Um Observble é um objeto utilizado para observar uma determinada operação assíncrona,
   * como requisições HTTP, por exemplo. Ele pode emitir múltiplos valores conforme
   * essa operação é efetuada.
   */
  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
