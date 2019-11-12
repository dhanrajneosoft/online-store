import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { MatCard, MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
const routes = [{
  path: '',
  component: CartComponent
}]
@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    MatSnackBarModule
  ]
})
export class CartModule { }
