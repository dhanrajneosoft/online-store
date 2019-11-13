import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart-service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  cart: any = [];

  constructor(private cs: CartService, private apiCustomer: CustomerService) { }

  ngOnInit() {
    this.getCart();
    this.cartRequestListen();
  }
  cartRequestListen() {
    this.cs.data.subscribe((res) => {
      console.log('res', res);
      this.cart = res;
    }, (err) => {
      console.error(err);
    });
  }
  getCart() {
    this.apiCustomer.getCart().subscribe((res) => {
      if (res.length) {
        this.cart = res[0].product;
      }
      console.log(this.cart);
      this.cs.dataSource.next(this.cart);
    }, (err) => { });
  }
}
