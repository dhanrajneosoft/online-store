import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHelper } from '../helpers/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apiHelper: ApiHelper) { }
  login(data) {
    const url = this.apiHelper.getSpaUrl('login');
    return this.http.post<any>(url, data);
  }
}
