import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../models/product';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  url: string = Utils.url;
  httpOptions = Utils.httpOptions;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url + '/products', this.httpOptions);
  }

  createProduct(newProduct: Product) {
    return this.http.post(this.url + '/products', { product: newProduct }, this.httpOptions);
  }
}