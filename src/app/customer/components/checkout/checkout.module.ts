import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Route, RouterModule } from '@angular/router';
import { MatCardModule, MatCheckboxModule, MatRadioModule, MatButtonModule } from '@angular/material';
const routes = [{
  path: '',
  component: CheckoutComponent
}]
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
