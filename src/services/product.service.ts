import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constant';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY
    );
  }

  getProductsByCategory(id: number) {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY + id
    );
  }

  getProducts() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT
    );
  }

  createProduct(product: Product) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,
      product
    );
  }

  updateProduct(product: Product) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,
      product
    );
  }

  deleteProduct(id: number) {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + id
    );
  }
}
