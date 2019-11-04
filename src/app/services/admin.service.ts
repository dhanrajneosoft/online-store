import { Injectable } from '@angular/core';
import { ApiHelper } from '../helpers/api-helper';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../layout/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private apiHelper: ApiHelper, private http: HttpClient) { }
  getProducts() {
    const url = this.apiHelper.getSpaUrl('products');
    return this.http.get<any>(url);
  }
  getOrders() {
    const url = this.apiHelper.getSpaUrl('orders');
    return this.http.get<any>(url);
  }
  addProduct(data) {
    const url = this.apiHelper.getSpaUrl('products');
    return this.http.post<any>(url, data);
  }
  updateProduct(productId, data) {
    const url = this.apiHelper.getSpaUrl('product/' + productId);
    return this.http.put<any>(url, data);
  }
  getCategories(){
    const url = this.apiHelper.getSpaUrl('categories');
    return this.http.get<any>(url);
  }
  uploadImage(data){
      const url = this.apiHelper.getSpaUrl('fileupload');
      return this.http.post<any>(url, data);
  }
}
