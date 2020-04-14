import { getRouterState, RouterStateUrl } from '../reducers';
import { createSelector } from '@ngrx/store';



// Router state
export const getRoutingState = createSelector(
  getRouterState,
  (state) => state.state
);

export const getUrl = createSelector(
  getRoutingState,
  (state) => state.url
);

export const getQueryParams = createSelector(
  getRoutingState,
  (state: RouterStateUrl) => state.queryParams
);

export const getParams = createSelector(
  getRoutingState,
  (state: RouterStateUrl) => state.params
);
