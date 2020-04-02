import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './reducers/product.reducer';

export interface FeatureProducts {
  products: fromProduct.ProductState;
}

export const productReducers: ActionReducerMap<FeatureProducts> = {
  products: fromProduct.productReducer
};

export const getFeatureProductsState = createFeatureSelector<FeatureProducts>('products');
