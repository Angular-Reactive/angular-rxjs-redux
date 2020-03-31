import * as fromProduct from './../actions/product.actions';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, delay, map, catchError } from 'rxjs/operators';

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
  products$: Observable<Action> = this.actions$.pipe(
    // ensures we set ourselves up to listen to a specific dispatchet action
    ofType(fromProduct.ProductActionTypes.FETCHING_PRODUCTS_REQUEST),

    // The call to switchMap ensures we are able to take the current Observable
    // that wer are currently on, and turn it into something completely different,
    // such as a call to an AJAX service.
    switchMap(() =>
      ajax.getJSON('data/products.json').pipe(
        delay(3000),
        map(payload => new fromProduct.ProductsFetchSuccessfullyAction()),
        catchError(err => of(new fromProduct.ProductsFetchErrorAction(err))
      )
    )
  );
}
