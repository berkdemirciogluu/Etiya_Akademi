import { CartItems } from './../models/cartItems';
import { CartItem } from './../models/cartItem';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, tap } from 'rxjs';
import { ProductService } from './product.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  _cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor(
    private productService: ProductService,
    private toasterService: ToastrService
  ) {}

  addToCart(product: Product) {
    this._cartItems
      .pipe(
        tap((_) => {
          let item: CartItem | undefined = this._cartItems.value.find(
            (c) => c.product.id === product.id
          );
          if (item) {
            item.quantity += 1;
          } else {
            let cartItem = new CartItem();
            cartItem.product = product;
            cartItem.quantity = 1;
            this._cartItems.value.push(cartItem);
          }
        })
      )
      .subscribe();
  }

  removeFromCart(product: Product) {
    return this._cartItems.pipe(
      tap((_) => {
        let item: CartItem | undefined = this._cartItems.value.find(
          (c) => c.product.id === product.id
        );
        if (item) {
          this._cartItems.value.splice(this._cartItems.value.indexOf(item), 1);
        }
      })
    );
  }

  removeCartProductsFromBackend() {
    for (let cartItem of this._cartItems.value) {
      this.productService.getById(cartItem.product.id).subscribe((response) => {
        let product: Product = response;
        product.unitsInStock -= cartItem.quantity;
        debugger;
        this.productService
          .update(product)
          .subscribe((result) =>
            this.toasterService.success('Order Completed')
          );
      });
    }
    this._cartItems
      .pipe(
        tap((_) => {
          this._cartItems.value.splice(0, this._cartItems.value.length);
        })
      )
      .subscribe();
  }
}
