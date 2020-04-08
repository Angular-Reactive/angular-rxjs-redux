import * as fromJedi from './reducers/jedi-list.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface FeatureJedi {
  jedis: fromJedi.State;
}

export const jediReducers: ActionReducerMap<FeatureJedi> = {
  jedis: fromJedi.jediListReducer
}

export const getFeatureJediState = createFeatureSelector<FeatureJedi>('jediList');
