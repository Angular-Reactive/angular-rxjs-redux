import { AppState } from '../state';
import { Action,  } from '@ngrx/store';

export function counterReducer1(state = 0, action: Action): number {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
}
