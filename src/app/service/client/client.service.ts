import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  // Client API
  getAllClients() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/client/get-all-client`);
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

  getClientLoads(id) {
    return id;
  }
}
