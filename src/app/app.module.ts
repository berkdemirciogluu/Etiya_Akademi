import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { CategoryModule } from './features/category/category.module';
import { ProductModule } from './features/product/product.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FeaturesModule,
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
