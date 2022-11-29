import { FormsModule } from '@angular/forms';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
