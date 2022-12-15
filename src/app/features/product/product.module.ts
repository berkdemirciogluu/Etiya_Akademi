import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { DashboardProductsListComponent } from './components/dashboard-products-list/dashboard-products-list.component';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
    ProductFormPageComponent,
    DashboardProductsPageComponent,
    DashboardProductsListComponent,
    FilterProductsComponent,
    FilterProductPipe,
    FilterProductByPricePipe,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  exports: [ProductComponent],
})
export class ProductModule {}
