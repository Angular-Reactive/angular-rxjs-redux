import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { ProductActions } from '../index';
import { of } from 'rxjs';

@Injectable()
export class ProductsHttpActions {
  constructor(private http: HttpClient) {

  }

  addProduct(action) {
    return this.http.post('products/', action.payload).pipe(
      map( (product: any) => new ProductActions.AddProductSuccessfullyAction(product)),
      catchError(err => of(new ProductActions.AddProductErrorAction(err)))
    );
  }

  fetchProducts() {
    return this.http.get('../../../../../assets/data/products.json').pipe(
      delay(3000),
      map((products: any) => new ProductActions.ProductsFetchSuccessfullyAction(products)),
      catchError(err => of(new ProductActions.ProductsFetchErrorAction(err)))
    );
  }
}
