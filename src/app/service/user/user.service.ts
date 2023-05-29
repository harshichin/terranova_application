import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // User API
  getAllUsers() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/user/get-all-users`);
  }

  addUser(data: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/user/add-users`, data);
  }

  editUser(id: any, data: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/user/edit-users${id}`, data);
  }

  deleteUser(id) {
    return this.http.delete<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/user/delete-users/${id}`);
  }
}
