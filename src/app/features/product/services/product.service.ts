import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GetListOptions } from 'src/app/core/models/get-list-options';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getProducts(options?: GetListOptions): Observable<Product[]> {
    let newPath = this.apiUrl + 'products';
    let queryParams: any = {};
    if (options?.pagination) {
      queryParams['_page'] = options.pagination.page;
      queryParams['_limit'] = options.pagination.limit;
    }
    if (options?.filters) {
      queryParams = { ...queryParams, ...options.filters };
    }
    return this.httpClient.get<Product[]>(newPath, {
      params: queryParams,
    });
  }
  getById(productId: number): Observable<Product> {
    let newPath = this.apiUrl + 'products';
    return this.httpClient.get<Product>(`${newPath}/${productId}`);
  }

  add(request: Product): Observable<Product> {
    let newPath = this.apiUrl + 'products';
    return this.httpClient.post<Product>(newPath, request);
  }

  update(request: Product): Observable<Product> {
    debugger;
    let newPath = `${this.apiUrl}products/${request.id}`;
    return this.httpClient.put<Product>(newPath, request);
  }

  delete(productId: number): Observable<Product> {
    let newPath = this.apiUrl + 'products';
    return this.httpClient.delete<Product>(`${newPath}/${productId}`);
  }
}
