import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    let newPath = this.apiUrl + 'products';
    return this.httpClient.get<Product[]>(newPath);
  }
  getProductsByCategory(categoryId: number): Observable<Product[]> {
    let newPath = this.apiUrl + 'products?categoryId=' + categoryId;
    return this.httpClient.get<Product[]>(newPath);
  }
  getProductsByPagination(page: number, limit: number): Observable<Product[]> {
    let newPath = `${this.apiUrl}products?_page=${page}&_limit=${limit}`;
    return this.httpClient.get<Product[]>(newPath);
  }
}
