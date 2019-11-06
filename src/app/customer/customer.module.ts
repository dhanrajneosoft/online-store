import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatMenuModule, MatInput, MatInputModule, MatBadgeModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './services/customer.service';
import { CartService } from './services/cart-service';
// const routes = [{
//   path :'',
//   loadChildren : "./components/customer-home/customer-home.module#CustomerHomeModule"
// }]
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    TranslateModule,
    MatMenuModule,
    MatInputModule,
    MatBadgeModule,
    CustomerRoutingModule
  ],
  providers: [CustomerService, CartService]
})
export class CustomerModule { }
