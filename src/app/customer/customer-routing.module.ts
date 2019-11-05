import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerComponent } from './customer.component';
const routes = [{
    path: '',
    component: CustomerComponent,
    children: [
        {
            path: 'home',
            loadChildren: "./components/customer-home/customer-home.module#CustomerHomeModule"
        }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {

}