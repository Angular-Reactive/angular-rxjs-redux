import { Action } from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
}

export class IncrementAction implements Action {
  readonly type = ActionTypes.INCREMENT;

  constructor() {}
}

export class DecrementAction implements Action {
  readonly type = ActionTypes.DECREMENT;

  constructor() {}
}

export type CounterActions = IncrementAction | DecrementAction;
