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
    this.apiAdmin.getProducts().subscribe((res) => {
      this.orders = res.data;
      console.log(res);
    }, (err) => {
      console.log(err
      )
    })
  }
}
