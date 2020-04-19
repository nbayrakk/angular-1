import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/app/sevices/cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-s',
  templateUrl: './cart-s.component.html',
  styleUrls: ['./cart-s.component.css'],
})
export class CartSComponent implements OnInit, DoCheck {
  constructor(private cartService: CartService) {}

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItem: CartItem[];

  ngOnInit(): void {
    this.cartItem = this.cartService.list();
  }
  ngDoCheck() {
    this.totalCartItem = this.cartService
      .list()
      .reduce((a, b) => a + b.quantity, 0);

    this.totalCartItemPrice = this.cartService
      .list()
      .reduce((a, b) => a + b.quantity * b.product.price, 0);
  }
}
