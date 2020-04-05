
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';
import * as fromUser from '../actions/user.actions';

export interface ActionPayload<T> extends Action {
  payload: T;
}

// Entity state
export interface State extends EntityState<User> {
  selectedUserId: number | null;
}

// An instance of of the adapter sits on a range of methods,
// allowing us to write a great deal less code
const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialState: State = {
  ids: [],
  entities: {},
  selectedUserId: null
};

const initial = userAdapter.getInitialState(initialState);

export function userReducer(state = initial, action: ActionPayload<User>): State {
  switch (action.type) {
    case fromUser.UserActionTypes.ADD_USER:
      return userAdapter.addOne(action.payload, state);

    case fromUser.UserActionTypes.UPDATE_USER:
      return userAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      },
      state);

    default:
      return state;
  }
}
