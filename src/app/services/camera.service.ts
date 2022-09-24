import { Injectable } from '@angular/core';
import  { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Camera } from "../models/camera.model"

let baseUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Camera[]> {
    return this.http.get<Camera[]>(`${baseUrl}/camera`);
  }
}
