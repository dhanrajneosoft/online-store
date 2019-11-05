import { Injectable } from '@angular/core';
import { ApiHelper } from 'src/app/helpers/api-helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiHelper: ApiHelper, private http: HttpClient) { }
  getProducts(){
    const url = this.apiHelper.getSpaUrl('products');
    return this.http.get<any>(url)
  }
}
