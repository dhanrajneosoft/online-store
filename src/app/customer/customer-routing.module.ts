import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerComponent } from './customer.component';
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: 'home',
                loadChildren: "./components/customer-home/customer-home.module#CustomerHomeModule"
            },
            {
                path: 'cart',
                loadChildren: "./components/cart/cart.module#CartModule"
            },
            {
                path: 'checkout',
                loadChildren: "./components/checkout/checkout.module#CheckoutModule"
            },
            {
                path: 'orders',
                loadChildren: "./components/customer-orders/customer-orders.module#CustomerOrdersModule"
            }
        ]
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {

}