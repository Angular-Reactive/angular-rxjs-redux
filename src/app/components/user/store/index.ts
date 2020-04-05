
import { User } from '../model/user.model';

import * as fromUser from './reducers/user.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface FeatureUser {
  users: fromUser.State;
}

export const userReducers: ActionReducerMap<FeatureUser> = {
  users: fromUser.userReducer
}

export const getFeatureUserState = createFeatureSelector<FeatureUser>('user');
