
import { Action } from '@ngrx/store';
export enum UserActionTypes {
  ADD_USER = '[User] Add user'
}

export class AddUserAction implements Action {
  readonly type: UserActionTypes.ADD_USER;

  constructor() {}
}

export type UserActions = AddUserAction;
