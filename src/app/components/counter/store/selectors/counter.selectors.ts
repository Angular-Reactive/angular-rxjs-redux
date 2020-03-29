import { AppState } from 'src/app/store/state/app-state';
import { createSelector } from '@ngrx/store';

export const getCounterState = (state: AppState) => state.counter;

// export const getCounterListState = (state: AppState) => state.counterList;

export const getCounter = createSelector(getCounterState, (state) => state.data);

export const getCounterList = createSelector(getCounterState, (state) => state.list);
