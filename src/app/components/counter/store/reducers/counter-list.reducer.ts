import { CounterListActions } from '../index';
import { Counter } from '../../model/counter.model';
import { ActionTypes } from '../actions/counter-list.actions';


export interface CounterListState  {
  list: Array<Counter>;
}

const initialState: CounterListState = {list: []};

export function counterListReducer(state = initialState,
      action: CounterListActions.Actions): CounterListState {

  switch (action.type) {
    case ActionTypes.ADD_COUNTER_ITEM:
      const item = new Counter(action.payload.id, action.payload.texto);
      return ({
        ...state,
        list: [...state.list, item]
      });

    case ActionTypes.REMOVE_COUNTER_ITEM:
      console.log('Item id: ', action.id);
      return ({
        ...state,
        // tslint:disable-next-line: no-shadowed-variable
        list: state.list.filter((item: Counter) => item.id !== action.id)
      });

    default:
      return state;
  }
}

export const getCounterList = (state: CounterListState) => state.list;
