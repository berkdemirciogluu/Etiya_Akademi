import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService._cartItems.subscribe(
      (response) => (this.cartItems = response)
    );
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  completeOrder() {
    this.cartService.removeFromBackend();
  }
}
