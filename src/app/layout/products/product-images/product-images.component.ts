import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  Slider = true;
  constructor(private apiAdmin: AdminService) { }

  ngOnInit() {

    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
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
    console.log(event.target.files);
    const formData = new FormData();
    if (event.target.files) {
      formData.append('avtar', event.target.files[0]);
      this.apiAdmin.uploadImage(formData).subscribe((res) => { }, (err) => { })
    }
  }

}
