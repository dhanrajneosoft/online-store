import { Component, OnInit, Inject, Optional, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { AdminService } from 'src/app/services/admin.service';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit, AfterViewInit {
  Slider = true;
  envPath = environment.uri;
  constructor(private apiAdmin: AdminService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
     private snackbar: MatSnackBar,
     private dialogRef : MatDialogRef<ProductImagesComponent>) {
    console.log(this.data);
  }
  ngOnInit() {
    if (this.data) {

    }
  }
  ngAfterViewInit() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
  uploadImage(event) {
    const formData = new FormData();
    if (event.target.files) {
      formData.append('image', event.target.files[0]);
      formData.append('product_id', this.data._id);
      this.apiAdmin.uploadProductImage(formData).subscribe((res) => {
        this.dialogRef.close();
        this.snackbar.open('Product Imange has been uploaded', "Uploaded", {
          duration: 2000
        });
      }, (err) => {
        this.snackbar.open('Product Uploading failed', "Upload Failed", {
          duration: 2000
        })
      })
    }
  }
  deletProductImage(image_id, index) {
    this.apiAdmin.deleteProductImageById(image_id, { product_id: this.data._id }).subscribe((res) => {
      this.data.images.splice(index, 1);
      this.snackbar.open('Product Image has been removed', "Deleted", {
        duration: 2000
      })
    }, (err) => {
      console.log(err)
    })
  }

}
