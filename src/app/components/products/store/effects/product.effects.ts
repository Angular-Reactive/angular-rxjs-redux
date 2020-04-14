import { ProductActions } from '../index';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Injectable } from '@angular/core';
import { switchMap, delay, map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product.model';
import { ProductsHttpActions } from '../actions/products-http-actions';
import { Router } from '@angular/router';

// The effect is just a class decorated with the @Injectable decorator.
// It also contains two members: one member of 'Actions' type and another
// of the 'Observable<Action>' type.
// 'Actions' come from the @ngrx/effects module and are nothing more than
// a specialized Observable with the 'ofType()' method on it.
// 'ofType()' is a method that takes a string constant, which is the event
// we are listening for.
@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions<Action>,
              private srv: ProductsHttpActions,
              private router: Router) {}

   @Effect()
   productAdd$: Observable<Action> = this.actions$.pipe(
     ofType(ProductActions.ProductActionTypes.ADD_PRODUCT_REQUEST),
     switchMap(action => this.srv.addProduct(action))
   );

   @Effect()
   products$: Observable<Action> = this.actions$.pipe(
    ofType(ProductActions.ProductActionTypes.FETCHING_PRODUCTS_REQUEST),
    switchMap(action => this.srv.fetchProducts())
   );

   @Effect({ dispatch: false })
   routingProductsS = this.actions$.pipe(
     ofType(ProductActions.ProductActionTypes.GO_TO_PRODUCTS),
     tap(action => this.router.navigate(['/products']))
   );
}
