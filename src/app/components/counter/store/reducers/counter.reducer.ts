import { CounterActions } from '../index';
import { ActionTypes } from '../actions/counter.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Counter } from '../../model/counter.model';

// Entity state
export interface State  {
  data: number;
}

const initialState: State = {
  data: 0
};


export function counterReducer(state = initialState, action: CounterActions.Actions): State {

  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        data: action.payload
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state;
  }
}

export const getCounterData = (state: State) => state.data;
