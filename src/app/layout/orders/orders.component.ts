import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private apiAdmin: AdminService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.apiAdmin.getOrders().subscribe((res) => {
      this.orders = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  changeOrderStatus(id) {
    console.log(id);
    this.apiAdmin.dispatchOrder(id, { action: 'dispatch' }).subscribe((res) => {
      console.log(res);
      this.getOrders();
    }, (err) => {
      console.error(err);
    });
  }
}
