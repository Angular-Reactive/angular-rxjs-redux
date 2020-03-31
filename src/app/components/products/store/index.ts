import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './reducers/product.reducer';

export interface FeatureProducts {
  products: fromProduct.ProductState;
}

// The 'createFeatureSelector()' method allow us to
// get a top-level feature state property of the the
// state tree simply by calling it out by its feature name.
// We pass it a string that represents the name used to register
// the feature state in the feature module. It uses this string to
// look up the feature state from within the root state object.
// It then returns a reference to that specific slice of state.

export const getProductState = createFeatureSelector('product');

export const getProductsEntities = createSelector(
  getProductState,
  fromProduct.getProductsEntities
);

export const getProductsLoading = createSelector(
  getProductState,
  fromProduct.getProductsLoading
);

export const getProductsError = createSelector(
  getProductState,
  fromProduct.getProductsError
);

export const productReducers: ActionReducerMap<FeatureProducts> = {
  products: fromProduct.productReducer
}
