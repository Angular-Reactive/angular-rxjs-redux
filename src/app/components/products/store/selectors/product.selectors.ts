// The 'createFeatureSelector()' method allow us to
// get a top-level feature state property of the the
// state tree simply by calling it out by its feature name.
// We pass it a string that represents the name used to register
// the feature state in the feature module. It uses this string to
// look up the feature state from within the root state object.
// It then returns a reference to that specific slice of state.
import { createSelector } from '@ngrx/store';
import { getFeatureProductsState } from '../reducers/index';
import { RootRoutingSelectors } from '../../../../store/index';

export const getProductsList = createSelector(getFeatureProductsState, (state) => state.products.list);
export const isLoading = createSelector(getFeatureProductsState, (state) => state.products.loading);
export const getProductsError = createSelector(getFeatureProductsState, (state) => state.products.error);
export const getSelectedProduct = createSelector(
  getProductsList,
  RootRoutingSelectors.getParams,
  (products, params) => params.id);
