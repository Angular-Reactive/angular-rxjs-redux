import { Store } from '@ngrx/store';
import { Product } from './../../model/product.model';
import { Injectable } from '@angular/core';
import { createType, createActionCreator, createBoundActionCreator } from 'src/app/store/state';

export enum ActionTypes {
  FETCHING_PRODUCTS_REQUEST = '[Product] Fetching products request',
  FETCHING_PRODUCTS_SUCCESS = '[Product] Fetching products success',
  FETCHING_PRODUCTS_FAILURE = '[Product] Fetching products failure'
}

@Injectable()
export class ProductActions {
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              TYPE DEFINITIONS                */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    static LOAD_PRODUCTS_REQUEST = createType('[Products List] Load Products Request');
    static LOAD_PRODUCTS_SUCCESS = createType('[Products List] Load Products Success');
    static LOAD_PRODUCTS_FAILURE = createType('[Products List] Load Products Failure');

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              ACTION CREATORS                 */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    static LoadProductsRequest = createActionCreator<Pick<Product, 'name'>>(ProductActions.LOAD_PRODUCTS_REQUEST);
    static LoadProductsSuccess = createActionCreator<Product[]>(ProductActions.LOAD_PRODUCTS_SUCCESS);
    static LoadProductsFailure = createActionCreator<{}>(ProductActions.LOAD_PRODUCTS_FAILURE);

    constructor(private store: Store<any>) {

    }

    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*              BOUND ACTIONS                   */
    /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    loadProductsRequest = createBoundActionCreator(ProductActions.LoadProductsRequest,
      this.store.dispatch.bind(this.store));
}
