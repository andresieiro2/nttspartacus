import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://65df3d0cff5e305f32a1d671.mockapi.io/ap/v1/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createUser(name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { name });
  }

  updateUser(id: string,name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { name });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
