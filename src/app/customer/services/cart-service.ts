import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart = [];
    dataSource = new BehaviorSubject(this.cart);
    data = this.dataSource.asObservable();
    constructor(private apiCustomer: CustomerService) {

    }
    async updatedDataSelection(requestType, data) {
        const cartData = this.getCartData();
        if (requestType === 'add') {
            const isExist = cartData.findIndex((value) => {
                console.log(value);
                if (value._id === data._id) {
                    return true;
                }
            });
            if (isExist >= 0) {
            } else {
                console.log('Cart Data', data);
                data.quantity = 1;
                const product = {
                    id: data._id,
                    quantity: data.quantity
                };
                this.apiCustomer.addToCart({ product }).subscribe((res) => {
                    console.log(res);
                    this.apiCustomer.getCart().subscribe((result) => {
                        console.log(result);
                        this.cart = result[0].product;
                        console.log(this.cart);
                        this.dataSource.next(this.cart);
                    });
                }, (error) => {

                });
            }
        }
    }
    getCartData() {
        let data;
        this.data.subscribe((res) => {
            data = res;
        }, (err) => {
            console.error(err);
        });
        return data;
    }
}
