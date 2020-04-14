
import { createSelector } from '@ngrx/store';
import { getFeatureJediState } from '../reducers/index';
export const getJedis = createSelector(getFeatureJediState, (state) => state.jedis.entities);
