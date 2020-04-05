import { createSelector } from '@ngrx/store';
import { getFeatureUserState } from '../index';

export const getUsers = createSelector(getFeatureUserState, (state)=> state.users.entities);
