import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  products: any;
  envPath = environment.uri;
  constructor(private apiCustomer: CustomerService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.apiCustomer.getProducts().subscribe((res) => {
      this.products = res.data;
    }, (err) => {
      console.log(err);
    })
  }
  addToCart(product){
    console.log(product);
  }
}
