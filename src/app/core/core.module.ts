import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/if-not.directive';
import { BackgroundHighlightDirective } from './directives/background-highlight.directive';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [IfNotDirective, BackgroundHighlightDirective, VatAddedPipe],
  imports: [CommonModule, CoreRoutingModule],
  exports: [IfNotDirective, BackgroundHighlightDirective, VatAddedPipe],
})
export class CoreModule {}
