import * as fromCounterList from '../reducers/counter-list.reducer';
import { createSelector } from '@ngrx/store';
import { getAllCounterState } from '../reducers/index';
import { CounterState } from '../../store/reducers/index';

// CounterList state
export const getCounterListState = createSelector(
  getAllCounterState,
  (state: CounterState) => state.counterList
);

export const getCounterListData = createSelector(
  getCounterListState,
  fromCounterList.getCounterList
);
