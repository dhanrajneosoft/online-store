import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatButtonModule, MatIconModule } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';
const routes: Routes = [
  {
      path: '',
      component: ProductsComponent
  }
];
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AdminService]
})
export class ProductsModule { }
