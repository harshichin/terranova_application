import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAllLocationData() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/get-all-location`);
  }

  addLocation(data: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/add-location`, data);
  }

  editLocation(id: any, data: any) {
    return this.http.put<{
      error: boolean;
      message: string;
      response: [];
      id: any;
    }>(`${environment.baseUrl}/master/edit-location/${id}`, data);
  }

  deleteLocation(id: any) {
    return this.http.delete<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/delete-location/${id}`);
  }

  // ------------------------------Material API------------------------------

  getAllMaterialData() {
    return this.http.get<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/get-all-material`);
  }

  addMaterial(data: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/add-material`, data);
  }

  editMaterial(id: any, data: any) {
    return this.http.put<{
      error: boolean;
      message: string;
      response: [];
      id: any;
    }>(`${environment.baseUrl}/master/edit-material/${id}`, data);
  }

  deleteMaterial(id: any) {
    return this.http.delete<{
      error: boolean;
      message: string;
      response: [];
    }>(`${environment.baseUrl}/master/delete-material/${id}`);
  }
}
