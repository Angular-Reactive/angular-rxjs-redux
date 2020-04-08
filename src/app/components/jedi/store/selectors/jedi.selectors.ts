
import { createSelector } from '@ngrx/store';
import { getFeatureJediState } from '../index';
export const getJedis = createSelector(getFeatureJediState, (state) => state.jedis.entities);
