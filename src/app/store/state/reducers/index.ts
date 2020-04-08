import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Injectable } from '@angular/core';

// to be used by the serialization process
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

@Injectable()
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {

    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    // This is where we are in our application.
    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, queryParams, params };
  }
}
