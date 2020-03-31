import { Product } from './../../model/product.model';
import * as fromProduct from '../actions/product.actions';

export interface ProductState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

const initialState: ProductState = {
  loading: false;
  list: [{ name: 'init' }],
  error: void 0 // 'void 0' returns undefined
};

export function productReducer(state = initialState, action: fromProduct.ProductActions): ProductState {

  switch (action.type) {
    case fromProduct.ActionTypes.FETCHING_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case fromProduct.ActionTypes.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products
      };

    case fromProduct.ActionTypes.FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
