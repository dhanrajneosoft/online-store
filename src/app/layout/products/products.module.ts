import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';
import { AddProductsDialogComponent } from './add-products-dialog/add-products-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/shared/services/interceptor.service';
const routes: Routes = [
  {
      path: '',
      component: ProductsComponent
  }
];
@NgModule({
  declarations: [ProductsComponent, AddProductsDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [AdminService, {provide : HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  entryComponents: [AddProductsDialogComponent]
})
export class ProductsModule { }
