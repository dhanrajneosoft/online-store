import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';
import { CdkTableModule, CdkTable } from '@angular/cdk/table';
const routes = [{
  path: '',
  component: OrdersComponent
}]
@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  providers : [CdkTable]
})
export class OrdersModule { }
