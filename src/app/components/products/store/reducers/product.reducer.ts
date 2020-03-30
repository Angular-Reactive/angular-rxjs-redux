import { ProductActions } from './../actions/product.actions';
import { Product } from './../../model/product.model';
import { Action, isAction } from '../../../../store/state';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};

export function reducer(state = initialState, action: Action<any>) {

  if (isAction(action, ProductActions.LoadProductsRequest)) {
    return state;
  }

  if (isAction(action, ProductActions.LoadProductsSuccess)) {
    const products = [...action.payload];

    return {
      ...state,
      products
    };
  }

  if (isAction(action, ProductActions.LoadProductsFailure)) {
    const products = [];

    return {
      ...state,
      products
    };
  }

  return state;
}
