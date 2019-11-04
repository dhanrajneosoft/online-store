import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-products-dialog',
  templateUrl: './add-products-dialog.component.html',
  styleUrls: ['./add-products-dialog.component.scss']
})
export class AddProductsDialogComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder,
    private apiAdmin: AdminService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<AddProductsDialogComponent>) { }
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
  }
}
