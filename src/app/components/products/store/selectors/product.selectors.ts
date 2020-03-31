import { ProductState } from './../reducers/product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


// The 'createFeatureSelector()' method allow us to
// get a top-level feature state property of the the
// state tree simply by calling it out by its feature name.
// We pass it a string that represents the name used to register
// the feature state in the feature module. It uses this string to
// look up the feature state from within the root state object.
// It then returns a reference to that specific slice of state.

export const getProductState = createFeatureSelector('product');

// With the 'createSelector()' method we can obtain references to
// properties further down our state tree.

export const getProductsList = createSelector(
  getProductState,
  (state: ProductState) => state.list
);

export const getProductsLoading = createSelector(
  getProductState,
  (state: ProductState) => state.loading
);

export const getProductsError = createSelector(
  getProductState,
  (state: ProductState) => state.error
);
