import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter((product: Product) =>
          product.name.toLocaleLowerCase().includes(filterText)
        )
      : value;
  }
}
