import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/index';

export const getUserState = createSelector(
  fromFeature.getFeatureUserState,
  (state: fromFeature.FeatureUser) => state.users
);

export const getUsersEntities = createSelector(
  getUserState,
  (users) => users.entities
);


