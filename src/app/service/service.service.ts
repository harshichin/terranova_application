import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  // User API
  getAllUsers() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/user/get-all-users`);
  }

  deleteUser(id) {
    return this.http.delete<{
      error: boolean;
      message: string;
      response;
    }>(`${environment.baseUrl}/user/delete-users/${id}`);
  }

  // Client API
  getAllClients() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/client/get-all-client`);
  }

  getClientLoads(id) {
    return id;
  }

  getClient(id) {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/client/get-client/${id}`);
  }

  deleteClient(id) {
    return this.http.delete<{
      error: boolean;
      message: string;
      response;
    }>(`${environment.baseUrl}/client/delete-client/${id}`);
  }
}
