import { Counter } from './../../model/counter.model';
import * as fromCounterList from '../actions/counter-list.actions';


export interface CounterListState  {
  list: Array<Counter>;
}

const initialState: CounterListState = {list: []};

export function counterListReducer(state = initialState, action: fromCounterList.CounterListActions): CounterListState {

  switch (action.type) {
    case fromCounterList.ActionTypes.ADD_COUNTER_ITEM:
      const item = new Counter(action.id, action.texto);
      return ({
        ...state,
        list: [...state.list, item]
      });

    case fromCounterList.ActionTypes.REMOVE_COUNTER_ITEM:
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
