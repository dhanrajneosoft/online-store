import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  envPath = environment.uri;
  cart: any[];
  constructor(private cartService: CartService, private snackbar: MatSnackBar, private apiCustomer: CustomerService) { }

  ngOnInit() {
    this.cartService.data.subscribe((res) => {
      this.cart = res;
      console.log(this.cart);
    }, (err) => {
      console.log(err);
    })
    this.getCart();
  }
  increment(i, limit) {
    console.log(this.cart[i]);
    limit = limit ? limit : Infinity;
    if (this.cart[i].quantity < limit) {
      this.apiCustomer.cartCartQuantity(this.cart[i]._id, this.cart[i].quantity + 1).subscribe((res) => {
        this.getCart();
      }, (err) => { })
    } else {
      this.snackbar.open(`Product Quantiy cannot more than ${limit}`, "Limit Exceeded", {
        duration: 5000
      })
    }
  }
  decrement(i) {
    if (this.cart[i].quantity > 1) {
      this.apiCustomer.cartCartQuantity(this.cart[i]._id, this.cart[i].quantity - 1).subscribe((res) => {
        this.getCart();
      }, (err) => { })
    } else {
      this.snackbar.open(`Product Quantity cannot less than 1`, "Limit Exceeded", {
        duration: 5000
      })
    }
  }
  removeFromCart(index, id) {
    this.cart.splice(index, 1)
  }
  getDiscount(mrp, sp) {
    let discount = mrp - sp;
    discount = discount / mrp * 100;
    return discount;
  }
  getTotalCartAmount(cart) {
    console.log(cart);
    let amount = 0;
    cart.forEach(element => {
      amount += element.quantity * element.selling_price;
    });
    return amount;
  }
  getFetch() {
    debugger
    fetch("http://google.com").then((res) => {
      console.log(res);
    }).catch((reason) => {
      console.log(reason);
    })
  }
  addToCart() {
    // const data = {}
    let data = { product: [] };
    this.cart.forEach((t) => {
      console.log(t);
      data.product.push({ id: t._id, quantity: t.quantity })
    })
    console.log(data);
    this.apiCustomer.addToCart(data).subscribe((res) => {
      // conso
    }, (err) => { })
  }
  getCart() {
    this.apiCustomer.getCart().subscribe((res) => {
      console.log(res);
      this.cart = res[0].product;
    }, (err) => { })
  }
  deleteItemFromCart(item_id) {
    this.apiCustomer.deleteItemFromCart(item_id).subscribe((res) => {
      this.getCart();
    }, (err) => {

    })
  }
}
