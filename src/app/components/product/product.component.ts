import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterProduct: string = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(async (response) => {
      await this.delay(1000); // to clearly see the spinner effect
      this.products = response;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.dataLoaded = false;
    this.products = [];
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe(async (response) => {
        await this.delay(1000); // to clearly see the spinner effect
        this.products = response;
        this.dataLoaded = true;
      });
  }

  addToCart(product: Product) {
    try {
      this.cartService.addToCart(product);
      this.toastrService.success('Added to the cart', product.name);
    } catch (error) {
      this.toastrService.error('Could not added to the cart', product.name);
    }
  }

  // This function is added to clearly see the spinner effect
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
