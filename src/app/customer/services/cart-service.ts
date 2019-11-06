import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class CartService {
     cart = [];
      dataSource = new BehaviorSubject(this.cart);
    data = this.dataSource.asObservable();
    constructor(){
        
    }
    updatedDataSelection(requestType, data) {
        if(requestType == 'add'){
            this.cart.push(data);
            this.dataSource.next(this.cart);
        }else {
           
        }
        
    }
} 
