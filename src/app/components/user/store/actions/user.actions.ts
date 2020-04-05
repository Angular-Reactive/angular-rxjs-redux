
import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';
export enum UserActionTypes {
  ADD_USER = '[User] Add user'
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;
  readonly payload: User;

  constructor(user: User) {
    this.payload = user;
  }
}

export type UserActions = AddUserAction;
