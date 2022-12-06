import { FilterPriceOperator } from './../../pipes/filter-product-by-price.pipe';
import { Pagination } from './../../models/pagination';
import { GetListOptions } from './../../models/get-list-options';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  filterPrice: number;
  filterPriceOperator: FilterPriceOperator;
  pagination: Pagination = {
    page: 1,
    limit: 10,
  };
  filters: any = [];
  totalProductNumber: number;
  categoryId: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductsLength();
    this.activatedRoute.params.subscribe((params) => {
      this.getCategoryIdFromRoute();
      this.getProducts({ pagination: this.pagination, filters: this.filters });
    });
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.getPagenationParametersFromRoute();
      this.getProducts({ pagination: this.pagination, filters: this.filters });
    });
  }

  getProductsLength() {
    this.productService.getProducts().subscribe(async (response) => {
      this.totalProductNumber = response.length;
    });
  }

  getProducts(options?: GetListOptions) {
    this.productService.getProducts(options).subscribe(async (response) => {
      debugger;
      //await this.delay(1000); // to clearly see the spinner effect
      this.products = response;
      this.dataLoaded = true;
    });
  }

  onPagination() {
    debugger;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        _page: this.pagination.page,
        _limit: this.pagination.limit,
      },
      queryParamsHandling: 'merge',
    });
  }

  getPagenationParametersFromRoute(): void {
    debugger;
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['_page']) {
        this.pagination.page = queryParams['_page'];
        this.pagination.limit = queryParams['_limit'] || 10;
      }
    });
  }

  getCategoryIdFromRoute() {
    debugger;
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.filters['categoryId'] = parseInt(params['categoryId']);
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
    this.pagination.limit = Number((event.target as HTMLInputElement).value);
    // For example 5 product per page is selected and we are in the last page 16
    // Then if the product per page is increased such as 10 then current page will be empty
    // To prevent this behavior below two lines are added
    const a = this.pageNumbers;
    if (this.pagination.page > a.length) this.pagination.page = a.length;
  }

  onButtonChange(event: Event) {
    const field = (event.target as HTMLInputElement).value;
    this.filterPriceOperator =
      FilterPriceOperator[field as keyof typeof FilterPriceOperator];
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.totalProductNumber / this.pagination.limit))
      .fill(0)
      .map((x, i) => i + 1);
  }

  setActiveToCurrentPage(page: number) {
    if (page == this.pagination.page) {
      return 'page-link active';
    }
    return 'page-link';
  }
  //*********************************** */

  // This function is added to clearly see the spinner effect
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
