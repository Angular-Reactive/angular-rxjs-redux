import * as fromUser from './user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface FeatureUser {
  users: fromUser.State;
}

export const userReducers: ActionReducerMap<FeatureUser> = {
  users: fromUser.userReducer
}

export const getFeatureUserState = createFeatureSelector<FeatureUser>('user');
