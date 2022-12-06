import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProductByPrice',
})
export class FilterProductByPricePipe implements PipeTransform {
  transform(products: Product[], price: number, operator?: string): Product[] {
    if (operator == null) {
      operator = Operator.eq;
    }

    switch (operator) {
      case Operator.eq:
        return products.filter((p) => p.unitPrice === price);
      case Operator.gt:
        return products.filter((p) => p.unitPrice > price);
      case Operator.lt:
        return products.filter((p) => p.unitPrice < price);
      case Operator.gte:
        return products.filter((p) => p.unitPrice >= price);
      case Operator.lte:
        return products.filter((p) => p.unitPrice <= price);
      default:
        return products;
    }
  }
}

export enum Operator {
  gt = 'gt',
  lt = 'lt',
  gte = 'gte',
  lte = 'lte',
  eq = 'eq',
}
