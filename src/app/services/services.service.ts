import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../core/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public setUser(formData): Observable<any> {
    return this.http.post(`${URL_API.baseUrl}/${URL_API.users}`, formData);
  }
}
