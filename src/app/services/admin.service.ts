import { Injectable } from '@angular/core';
import { ApiHelper } from '../helpers/api-helper';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../layout/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiHelper: ApiHelper, private http: HttpClient) { }
  getProducts(){
     const url = this.apiHelper.getSpaUrl('products');
     return this.http.get<any>(url); 
  }
  getOrders(){
    const url = this.apiHelper.getSpaUrl('orders');
    return this.http.get<any>(url);
  }
  addProduct(data){
    const url = this.apiHelper.getSpaUrl('products');
    return this.http.post<any>(url, data);
  }
}
