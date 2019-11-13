import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { Route, RouterModule } from '@angular/router';
import { MatCardModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
const routes = [{
  path: '',
  component: CheckoutComponent
}];
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class CheckoutModule { }
