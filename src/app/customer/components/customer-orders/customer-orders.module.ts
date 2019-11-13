import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrdersComponent } from './customer-orders.component';
import { Route, RouterModule } from '@angular/router';
import { OrdersModule } from '../../../layout/orders/orders.module';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
const route = [{
  path: '',
  component: CustomerOrdersComponent
}];
@NgModule({
  declarations: [CustomerOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomerOrdersModule { }
