import { AppState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ProductsRequestAction, AdProductRequestAction } from './store/actions/product.actions';
import * as fromProductSelectors from './store/selectors/product.selectors';
import * as fromProductActions from './store/actions/product.actions';

// Smart component
// This component is responsible for handling the route to products.
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {

  // To get a hold of the property that wee need from
    // the products state, wee need to use the variant of
    // the 'select' method that takes a function instead a string.

  products$ = this.store.select(fromProductSelectors.getProductsList);
  loading$ = this.store.select(fromProductSelectors.isLoading);
  error$ = this.store.select(fromProductSelectors.getProductsError);
  newProduct: string;

  constructor(private store: Store<AppState>) {}

  addNewProduct() {
    this.store.dispatch(new fromProductActions.AdProductRequestAction({name: this.newProduct}));
    this.newProduct = '';
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductsRequestAction());
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
