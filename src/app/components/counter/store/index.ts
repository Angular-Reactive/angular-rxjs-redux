import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './reducer/counter.reducer';
import * as fromCounterList from './reducer/counter-list.reducer';

export interface CounterState {
  data: fromCounter.State;
  list: fromCounterList.CounterListState;
}

export const reducers: ActionReducerMap<CounterState> = {
  data: fromCounter.counterReducer,
  list: fromCounterList.counterListReducer
};
