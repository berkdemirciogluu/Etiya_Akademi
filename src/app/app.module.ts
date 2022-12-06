import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { DashboardProductsListComponent } from './components/dashboard-products-list/dashboard-products-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';
import { DashboardCategoriesListComponent } from './components/dashboard-categories-list/dashboard-categories-list.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterProductPipe,
    CartSummaryComponent,
    PaginatorComponent,
    ProductFormPageComponent,
    ProductFormComponent,
    DashboardProductsPageComponent,
    DashboardProductsListComponent,
    HomePageComponent,
    CategoryFormComponent,
    DashboardCategoriesPageComponent,
    CategoryFormPageComponent,
    DashboardCategoriesListComponent,
    FilterCategoryPipe,
    FilterProductByPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
