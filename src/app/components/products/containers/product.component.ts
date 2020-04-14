import { AppState } from 'src/app/store/state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ProductActions, ProductSelectors } from '../store/index';
import { Observable } from 'rxjs';
import { Product } from '../model';

// Smart component
// This component is responsible for handling the route to products.
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  // To get a hold of the property that wee need from
    // the products state, wee need to use the variant of
    // the 'select' method that takes a function instead a string.

  products$ = this.store.select(ProductSelectors.getProductsList);
  loading$ = this.store.select(ProductSelectors.isLoading);
  error$ = this.store.select(ProductSelectors.getProductsError);
  product$: Observable<Product>;
  newProduct: string;

  constructor(private store: Store<AppState>) {
    console.log('Product Container constructor');
  }

  addNewProduct() {
    this.store.dispatch(new ProductActions.AdProductRequestAction({name: this.newProduct}));
    this.newProduct = '';
  }

  goToProductDetails() {
    this.product$ = this.store.pipe(
      select(ProductSelectors.getSelectedProduct)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductActions.ProductsRequestAction());
  }

}
