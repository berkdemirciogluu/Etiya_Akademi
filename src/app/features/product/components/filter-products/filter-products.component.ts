import { Category } from '../../../category/models/category';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/features/category/services/category.service';
import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
import { Supplier } from 'src/app/features/supplier/models/supplier';
import { FilterProduct } from 'src/app/features/product/models/filter-products';
import { ProductService } from 'src/app/features/product/services/product.service';
import { Product } from 'src/app/features/product/models/product';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css'],
})
export class FilterProductsComponent implements OnInit {
  categories: Category[];
  suppliers: Supplier[];
  products: Product[];
  suppliersId: number[];

  @Output() filterApplied = new EventEmitter<FilterProduct>();

  isInStock: boolean = true;
  currentName: string;
  currentCategoryId: number = 0;
  currentSupplierId: number = 0;
  minPrice: number;
  maxPrice: number;

  constructor(
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    debugger;
    this.getCategories();
    this.getSuppliers();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  getSuppliers() {
    this.supplierService.getSuppliers().subscribe((response) => {
      this.suppliers = response;
    });
  }

  onApplyFilter() {
    debugger;
    let obj: FilterProduct = {
      name: this.currentName,
      categoryId: Number(this.currentCategoryId),
      supplierId: Number(this.currentSupplierId),
      minPrice: Number(this.minPrice),
      maxPrice: Number(this.maxPrice),
    };
    this.filterApplied.emit(obj);
  }
}
