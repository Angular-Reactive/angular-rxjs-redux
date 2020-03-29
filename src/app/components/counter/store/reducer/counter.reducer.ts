import * as fromCounter from '../actions/counter.actions';
import { Action } from '@ngrx/store';

export interface State  {
  data: number;
}

const initialState: State = {data: 0};

export function counterReducer(state = initialState, action: fromCounter.CounterActions): State {

  switch (action.type) {
    case fromCounter.ActionTypes.INCREMENT:
      return {
        ...state,
        data: state.data + 1};

    case fromCounter.ActionTypes.DECREMENT:
      return {
        ...state,
        data: state.data - 1};

    default:
      return state;
  }
}
