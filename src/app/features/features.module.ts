import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { SupplierModule } from './supplier/supplier.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ProductModule,
    CategoryModule,
    CartModule,
    SupplierModule,
  ],
})
export class FeaturesModule {}
