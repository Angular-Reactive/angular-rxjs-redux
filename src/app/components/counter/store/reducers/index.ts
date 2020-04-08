import * as fromCounterList from './counter-list.reducer';
import * as fromCounter from './counter.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface CounterState {
  counter: fromCounter.State;
  counterList: fromCounterList.CounterListState;
}

export const reducers: ActionReducerMap<CounterState> = {
  counter: fromCounter.counterReducer,
  counterList: fromCounterList.counterListReducer
};

// Selector for the whole Counter state
export const getAllCounterState = createFeatureSelector<CounterState>('counter');
