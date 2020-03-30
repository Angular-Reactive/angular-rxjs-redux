import { ProductSelectors } from './store/selectors/product.selectors';
import { ProductActions } from './store/actions/product.actions';

import { AppState } from 'src/app/store/state/app-state';
import { Store } from '@ngrx/store';
import { Product } from './model/product.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

// Smart component
// This component is responsible for handling the route to products.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {

  product$: Observable<Product[]>;

  constructor(private productActions: ProductActions,
              private selectors: ProductSelectors) {

    this.productActions.loadProductsRequest({name: 'Coco'});
    this.product$ = this.selectors.selectProducts();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
