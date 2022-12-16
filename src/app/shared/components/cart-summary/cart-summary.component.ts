import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/features/cart/models/cartItem';
import { Product } from 'src/app/features/product/models/product';
import { CartService } from 'src/app/features/cart/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  cartItemSubs: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartService._cartItems.subscribe((response) => {
      debugger;
      this.cartItems = response;
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product).subscribe();
  }

  get totalPrice() {
    let price = 0;
    for (let cartItem of this.cartItems) {
      price += cartItem.product.unitPrice * cartItem.quantity;
    }
    return price;
  }

  ngOnDestroy(): void {
    this.cartItemSubs.unsubscribe();
  }
}
