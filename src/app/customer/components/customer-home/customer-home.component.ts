import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {environment} from '../../../../environments/environment';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  products: any;
  envPath = environment.uri;
  cart;
  constructor(private apiCustomer: CustomerService, private cs: CartService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.apiCustomer.getProducts().subscribe((res) => {
      this.cart = this.products = res.data;
    }, (err) => {
      console.log(err);
    })
  }
  addToCart(product){
    // console.log(product);
   this.cs.updatedDataSelection('add', product);
  }
}
