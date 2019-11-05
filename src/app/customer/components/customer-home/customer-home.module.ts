import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';
const routes = [{
  path: '',
  component: CustomerHomeComponent
}]
@NgModule({
  declarations: [CustomerHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule
  ]
})
export class CustomerHomeModule { }
