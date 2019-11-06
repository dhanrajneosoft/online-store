import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  cart:any;

  constructor(private cs : CartService) { }

  ngOnInit() {
  this.cs.data.subscribe((res)=>{
    this.cart = res;
    console.log(res);
  }, (err)=>{
     console.error(err);
  })
  }
}
