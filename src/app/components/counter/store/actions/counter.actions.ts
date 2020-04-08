import { Action } from '@ngrx/store';
import { Counter } from '../../model/counter.model';

export enum ActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
}

export class IncrementAction implements Action {
  readonly type = ActionTypes.INCREMENT;
  readonly payload: number;

  constructor(value: number) {
    this.payload = value;
  }
}

export class DecrementAction implements Action {
  readonly type = ActionTypes.DECREMENT;
  readonly payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

