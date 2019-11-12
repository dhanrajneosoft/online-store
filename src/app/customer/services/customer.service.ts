import { Injectable } from '@angular/core';
import { ApiHelper } from 'src/app/helpers/api-helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiHelper: ApiHelper, private http: HttpClient) { }
  getProducts() {
    const url = this.apiHelper.getSpaUrl('products');
    return this.http.get<any>(url)
  }
  addToCart(data) {
    const url = this.apiHelper.getSpaUrl('cart');
    return this.http.post<any>(url, data);
  }
  getCart() {
    const url = this.apiHelper.getSpaUrl('cart');
    return this.http.get<any>(url);
  }
  deleteItemFromCart(item_id) {
    const url = this.apiHelper.getSpaUrl('cart/' + item_id);
    return this.http.delete<any>(url);
  }
  cartCartQuantity(item_id, quantity) {
    const url = this.apiHelper.getSpaUrl('updateQuantity/' + item_id);
    return this.http.put(url, { quantity });
  }
  getProfile() {
    const url = this.apiHelper.getSpaUrl('users');
    return this.http.get<any>(url);
  }
}
