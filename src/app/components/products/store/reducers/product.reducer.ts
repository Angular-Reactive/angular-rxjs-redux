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
    case fromProduct.ProductActionTypes.FETCHING_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case fromProduct.ProductActionTypes.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products
      };

    case fromProduct.ProductActionTypes.FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

// State property selectors - pure functions
export const getProductsEntities = (state: ProductState) => state.list;
export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsError = (state: ProductState) => state.error;
