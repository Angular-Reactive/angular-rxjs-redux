import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_COUNTER_ITEM = '[CounterList] Add counter item',
  REMOVE_COUNTER_ITEM = '[CounterList] Remove counter item',
}

export class AddItemAction implements Action {
  readonly type = ActionTypes.ADD_COUNTER_ITEM;

  constructor(public id: number, public texto: string) {

  }
}

export class RemoveItemAction implements Action {
  readonly type = ActionTypes.REMOVE_COUNTER_ITEM;

  constructor(public id: number) {

  }
}

export type CounterListActions = AddItemAction | RemoveItemAction;
