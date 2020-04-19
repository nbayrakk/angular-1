import { Injectable } from '@angular/core';
import {CartItem} from '../cart/cart-item';
import {CART_ITEM_LIST} from  '../cart/cart-item-list'
import { Product } from '../prod/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: CartItem[];

  addToCart(product:Product){
    var addedItem = CART_ITEM_LIST.find(t=> product.id === product.id);

    if(addedItem) {
      addedItem.quantity += 1;
    }else {
     let cartItem = new CartItem();
     cartItem.product = product;
     cartItem.quantity = 1;
     CART_ITEM_LIST.push(cartItem)
    }

    
  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }
  //DropdownMenu açılmıyor silme işlemi kullanılmadı.
  removeFromCart(product:Product){
    var addedItem = CART_ITEM_LIST.find(t=> product.id === product.id);
    var indexNo = CART_ITEM_LIST.indexOf(addedItem); 
    if(indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo,1)
    }
  }
}
