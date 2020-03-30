import { Product } from './../../model/product.model';
import { Observable } from 'rxjs';
import { AppState } from './../../../../store/state/app-state';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

// This service will contains our selectors and can be injected
// into the smart component to efectively hide the 'ngrx' dependency
// from it.

// Selectors - Pure functions
export const productsSelector = (state: AppState) => state.products.products;

export const routeSelector = createFeatureSelector('router');
export const routeParamSelector = (paramName: string) => (router: any) =>
    router.state && router.state.params[paramName];

export const productNameSelector = createSelector(
  routeSelector,
  routeParamSelector('name')
);

@Injectable()
export class ProductSelectors {
  constructor(private store: Store<any>) {

  }

  selectProductName(): Observable<string> {
    return this.store.select(productNameSelector);
  }

  selectProducts(): Observable<Product[]> {
    return this.store.select(productsSelector);
  }
}
