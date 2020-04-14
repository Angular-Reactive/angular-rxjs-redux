import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { RootRoutingActions } from '../../store/index';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class RoutingEffects {
  constructor(private router: Router, private actions$: Actions<RootRoutingActions.RoutingAction>) {

  }

  @Effect({ dispatch: false })
  goToProducts$ = this.actions$.pipe(
    ofType(RootRoutingActions.ActionTypes.PRODUCTS),
    tap((action: RootRoutingActions.Actions) => {
      this.router.navigate([action.payload.url]);
    })
  );

  @Effect({ dispatch: false })
  locationUpdate$: Observable<Action> = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    tap((action: any ) => {
      console.log('router navigation effect: ', action);
    })
  );
}
