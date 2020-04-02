import * as fromProduct from './../actions/product.actions';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Injectable } from '@angular/core';
import { switchMap, delay, map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product.model';

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
              private http: HttpClient) {}

  @Effect()
  products$ = this.actions$.pipe(
    ofType(fromProduct.ProductActionTypes.FETCHING_PRODUCTS_REQUEST),
    switchMap(() =>
      this.http.get('../../../../../assets/data/products.json').pipe(
        delay(3000),
        map((payload: Product []) => new fromProduct.ProductsFetchSuccessfullyAction(payload)),
        catchError(err => of(new fromProduct.ProductsFetchErrorAction(err))
      ))
  ));

}
