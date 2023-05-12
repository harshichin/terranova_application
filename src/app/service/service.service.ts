import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) {}
  
  getAllAdmins() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: []
    }>(`${environment.baseUrl}/admin/get-all-admins`);
  }
}
