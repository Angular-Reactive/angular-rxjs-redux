import { Action } from '@ngrx/store';
import { Product } from './../../model/product.model';
import { Injectable } from '@angular/core';

export enum ProductActionTypes {
  FETCHING_PRODUCTS_REQUEST = '[Product] Fetching products request',
  FETCHING_PRODUCTS_SUCCESS = '[Product] Fetching products success',
  FETCHING_PRODUCTS_FAILURE = '[Product] Fetching products failure'
}

export class ProductsRequestAction implements Action {
  readonly type = ProductActionTypes.FETCHING_PRODUCTS_REQUEST;

  constructor() {

  }
}

export class ProductsFetchSuccessfullyAction implements Action {
  readonly type = ProductActionTypes.FETCHING_PRODUCTS_SUCCESS;
  readonly payload: Array<Product>;

  constructor(public products?: Product []) {
    this.payload = products;
  }
}

export class ProductsFetchErrorAction implements Action {
  readonly type = ProductActionTypes.FETCHING_PRODUCTS_FAILURE;
  readonly payload: string;

  constructor(public error: string) {
    this.payload = error;
  }
}

export type ProductActions = ProductsRequestAction |
                              ProductsFetchSuccessfullyAction |
                              ProductsFetchErrorAction;
