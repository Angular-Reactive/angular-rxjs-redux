import { AppState } from 'src/app/store/state';
import { createSelector } from '@ngrx/store';
import { getAllCounterState } from '../reducers/index';
import { CounterState } from '../../store/reducers/index';
import * as fromCounter from '../reducers/counter.reducer';

// Counter state
export const getCounterState = createSelector(
  getAllCounterState,
  (state: CounterState) => state.counter
);

export const getCounterData = createSelector(
  getCounterState,
  fromCounter.getCounterData
);
