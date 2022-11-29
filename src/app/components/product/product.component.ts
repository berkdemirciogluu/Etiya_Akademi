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

  pages: number[];
  page: number;
  limit: number = 10;
  totalProductNumber: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getPagenationParametersFromRoute();
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else if (this.page && this.limit) {
        this.getProductsLength();
        this.getProductsByPagination(this.page, this.limit);
      } else {
        this.getProductsLength();
        this.getProductsByPagination(1, 10);
      }
    });
  }

  getProductsLength() {
    this.productService.getProducts().subscribe(async (response) => {
      this.totalProductNumber = response.length;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(async (response) => {
      await this.delay(1000); // to clearly see the spinner effect
      this.products = response;
      this.dataLoaded = true;
    });
  }

  getProductsByPagination(page: number, limit: number = 5) {
    this.productService
      .getProductsByPagination(page, limit)
      .subscribe((response) => {
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
        this.totalProductNumber = response.length;
        this.dataLoaded = true;
      });
  }

  getPagenationParametersFromRoute(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['_page']) {
        debugger;
        this.page = queryParams['_page'];
        this.limit = queryParams['_limit'] || 10;
        this.getProductsByPagination(this.page, this.limit);
      }
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

  changePageSize(event: Event) {
    this.limit = Number((event.target as HTMLInputElement).value);
  }
  changePage(page: any) {
    this.page = page;
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.totalProductNumber / this.limit))
      .fill(0)
      .map((x, i) => i + 1);
  }
  //*********************************** */

  // This function is added to clearly see the spinner effect
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
