import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NaviComponent } from './components/navi/navi.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [NaviComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
  ],
  exports: [NaviComponent, CartSummaryComponent],
})
export class SharedModule {}
