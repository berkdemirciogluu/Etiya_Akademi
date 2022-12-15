import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/features/cart/models/cartItem';
import { Product } from 'src/app/features/product/models/product';
import { CartService } from 'src/app/features/cart/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  cartItemSubs: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItemSubs = this.cartService._cartItems.subscribe(
      (response) => (this.cartItems = response)
    );
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product).subscribe();
  }

  completeOrder() {
    this.cartService.removeCartProductsFromBackend();
  }

  ngOnDestroy(): void {
    this.cartItemSubs.unsubscribe();
  }
}
