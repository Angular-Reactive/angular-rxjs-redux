import { AppState } from 'src/app/store/state/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ProductsRequestAction } from './store/actions/product.actions';
import { isLoading, getProductsList, getProductsError } from './store/selectors/product.selectors';

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

  products$ = this.store.select(getProductsList);
  loading$ = this.store.select(isLoading);
  error$ = this.store.select(getProductsError);

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductsRequestAction());
  }

}
