import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  placeorderForm: FormGroup;
  users: any;
  payments = ['credit card', 'debit card', 'cash on delivery', 'netbanking'];
  constructor(private apiCustomer: CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getUser();
    this.placeorderForm = this.fb.group({
      address: [],
      payment_mode: []
    })
  }
  getUser() {
    this.apiCustomer.getProfile().subscribe((res) => {
      this.users = res.data;
    }, (err) => {
      console.log(err);
    })
  }
  submit() {
    console.log(this.placeorderForm.value);
    if (this.placeorderForm.valid) {
      console.log(this.placeorderForm.value);
      this.apiCustomer.placeorder(this.placeorderForm.value).subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
    }
  }
}
