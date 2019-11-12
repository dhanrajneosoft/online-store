import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  users: any;
  payments = ['credit card', 'debit card', 'cash on delivery', 'netbanking'];
  constructor(private apiCustomer: CustomerService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.apiCustomer.getProfile().subscribe((res) => {
      this.users = res.data;
    }, (err) => {
      console.log(err);
    })
  }


}
