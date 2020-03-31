import { Store, Action } from '@ngrx/store';
import { Product } from './../../model/product.model';
import { Injectable } from '@angular/core';
import { createType, createActionCreator, createBoundActionCreator } from 'src/app/store/state';

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

  constructor(public products?: Product []) {

  }
}

export class ProductsFetchErrorAction implements Action {
  readonly type = ProductActionTypes.FETCHING_PRODUCTS_FAILURE;

  constructor(public error: string) {

  }
}

export type ProductActions = ProductsRequestAction |
                              ProductsFetchSuccessfullyAction |
                              ProductsFetchErrorAction;
