import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
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

  get totalPrice() {
    let price = 0;
    for (let cartItem of this.cartItems) {
      price += cartItem.product.unitPrice * cartItem.quantity;
    }
    return price;
  }
}
