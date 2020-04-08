import * as fromJedi from '../actions/index';
import { Action } from '@ngrx/store';
import { Jedi } from '../../../../model/jedi.model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { JediActionTypes } from '../actions/jedi-list-actions';

// export interface ActionPayload<T> extends Action {
//   payload: T;
// }

// Entity state
export interface State extends EntityState<Jedi> { }

const jediAdapter: EntityAdapter<Jedi> = createEntityAdapter<Jedi>();

const initialState: State = {
  ids: [],
  entities: {}
}

const initial: State =  jediAdapter.getInitialState(initialState);

export function jediListReducer(state = initial, action: fromJedi.JediActions): State {

  switch (action.type) {
    case JediActionTypes.ADD_JEDI:
      return  jediAdapter.addOne(action.payload, state);

    case JediActionTypes.REMOVE_JEDI:
      return jediAdapter.removeOne(action.payload.id, state);

    case JediActionTypes.LOAD_JEDIS:
      return jediAdapter.updateMany(action.payload.jedis, state);

    default:
      return state;
  }
}
