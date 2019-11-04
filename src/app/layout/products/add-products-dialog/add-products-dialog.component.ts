import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-products-dialog',
  templateUrl: './add-products-dialog.component.html',
  styleUrls: ['./add-products-dialog.component.scss']
})
export class AddProductsDialogComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private apiAdmin: AdminService) { }
  ngOnInit() {
    this.productForm = this.fb.group({
      "category": [],
      "name": [],
      "price": [],
      "mrp": [],
      "selling_price": [],
      "description": [],
      "quantity": [],
      "barcode": []
    })
  }
  submit() {
    console.log(this.productForm.value);
    this.apiAdmin.addProduct(this.productForm.value).subscribe((res) => { 
      console.log(res);
    }, (error) => { 
      console.log(error);
    })
  }
}
