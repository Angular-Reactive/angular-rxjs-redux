import { getProductsList, getProductsLoading, getProductsError } from './store/selectors/product.selectors';
import { ProductActions } from './store/actions/product.actions';

import { AppState } from 'src/app/store/state/app-state';
import { Store } from '@ngrx/store';
import { Product } from './model/product.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

// Smart component
// This component is responsible for handling the route to products.
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {

  product$: Observable<Product []>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) {
    // To get a hold of the property that wee need from
    // the products state, wee need to use the variant of
    // the 'select' method that takes a function instead a string.
    this.product$ = this.store.select(getProductsList);
    this.loading$ = this.store.select(getProductsLoading);
    this.error$ = this.store.select(getProductsError);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
