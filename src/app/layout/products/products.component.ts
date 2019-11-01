import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products;
  dataSource: any;
  constructor(private apiAdmin: AdminService) {

  }
  displayedColumns: string[] = ['name',
    'price',
    'mrp',
    'selling_price',
    'description',
    'quantity',
    'action'
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
}

export interface ProductModel {
  name: String,
  price: Number,
  mrp: Number,
  selling_price: Number,
  description: String,
  quantity: Number,
  barcode: String
}
