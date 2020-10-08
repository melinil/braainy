import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  url: string = "https://api.billysbilling.com/v2"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Access-Token': '749f6c0f873eb98f16257eec9baa47c944617d34' })
  };

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url + '/products', this.httpOptions);
  }

  createProduct(newProduct: Product) {
    return this.http.post(this.url + '/products', {product: newProduct}, this.httpOptions);
  }
}