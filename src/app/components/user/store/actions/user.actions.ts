
import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';
export enum UserActionTypes {
  ADD_USER = '[User] Add user',
  UPDATE_USER = '[User] Update user'
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;
  readonly payload: User;

  constructor(user: User) {
    this.payload = user;
  }
}

export class UpdateUserAction implements Action {
  readonly type = UserActionTypes.UPDATE_USER;
  readonly payload: User;

  constructor(user: User) {
    this.payload = user;
  }
}

export type UserActions = AddUserAction | UpdateUserAction;
