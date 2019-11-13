import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  orders: any;
  envPath = environment.uri;
  constructor(private apiCustomer: CustomerService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.apiCustomer.getOrders().subscribe((res) => {
      console.log(res);
      this.orders = res;
    }, (err) => {
      console.error(err);
    })
  }

}
