import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';
import { AddProductsDialogComponent } from './add-products-dialog/add-products-dialog.component';
import { ProductImagesComponent } from './product-images/product-images.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products;
  dataSource: any;
  constructor(private apiAdmin: AdminService, private dialog: MatDialog) {

  }
  displayedColumns: string[] = ['name',
    'price',
    'mrp',
    'selling_price',
    'description',
    'quantity',
    'action',
    'status'
];
  // dataSource = new MatTableDataSource<ProductModel>(this.products);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getProducts();
    // this.dataSource.paginator = this.paginator;
  }
  getProducts() {
    this.apiAdmin.getProducts().subscribe((res) => {
      this.dataSource = res.data;
    }, (err) => { })
  }
  openAddProductDialog(requestType, product?: any): void {
    const dialogRef = this.dialog.open(AddProductsDialogComponent, {
      width: '500px',
      data: {requestType, product}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openImageDialog(){
    const dialogRef = this.dialog.open(ProductImagesComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

export interface ProductModel {
  name: String,
  price: Number,
  mrp: Number,
  selling_price: Number,
  description: String,
  quantity: Number,
  barcode: String,
  status: String
}
