import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-products-dialog',
  templateUrl: './add-products-dialog.component.html',
  styleUrls: ['./add-products-dialog.component.scss']
})
export class AddProductsDialogComponent implements OnInit {
  productForm: FormGroup;
  formData: any;
  categories: any;
  constructor(private fb: FormBuilder,
    private apiAdmin: AdminService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<AddProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    if (this.data.requestType == 'add') {
      this.formData = new productModel({});
    } else {
      console.log(this.data);
      this.formData = new productModel(this.data.product);
    }
    this.getCategories();
    console.log(this.formData);
    this.productForm = this.fb.group({
      "category": [this.formData.category],
      "name": [this.formData.name],
      "price": [this.formData.price],
      "mrp": [this.formData.mrp],
      "selling_price": [this.formData.selling_price],
      "description": [this.formData.description],
      "quantity": [this.formData.quantity],
      "barcode": [this.formData.barcode],
      "max_order_limit": [this.formData.max_order_limit ? this.formData.max_order_limit.toString() : '']
    })
  }
  submit() {
    console.log(this.productForm.value);
    if (this.data.requestType == 'add') {
      this.apiAdmin.addProduct(this.productForm.value).subscribe((res) => {
        console.log(res);
        this.productForm.reset();
        this.dialogRef.close();
        this.snackbar.open("product has been added", "Added", {
          duration: 2000
        })
      }, (error) => {
        this.snackbar.open(error.error.message, "Failed to Add", {
          duration: 3000
        })
        console.log(error);
      })
    } else if (this.data.requestType == 'edit') {
      this.apiAdmin.updateProduct(this.data.product._id, this.productForm.value).subscribe((res) => {
        console.log(res);
        this.productForm.reset();
        this.dialogRef.close();
        this.snackbar.open("product has been updated", "Updated", {
          duration: 2000
        })
      }, (error) => {
        this.snackbar.open(error.error.message, "Failed to update", {
          duration: 3000
        })
        console.log(error);
      })
    }
  }
  getCategories() {
    this.apiAdmin.getCategories().subscribe((res) => {
      console.log(res);
      this.categories = res;
    }, (err) => {
      console.log(err)
    })
  }
}
export class productModel {
  category: String;
  name: String;
  price: Number;
  mrp: Number;
  selling_price: Number;
  description: String;
  quantity: Number;
  barcode: Number;
  max_order_limit: Number;
  constructor(product) {
    this.category = product.category;
    this.name = product.name;
    this.price = product.price;
    this.mrp = product.mrp;
    this.selling_price = product.selling_price;
    this.description = product.description;
    this.quantity = product.quantity;
    this.barcode = product.barcode;
    this.max_order_limit = product.max_order_limit;
  }
}
