
import { Action } from '@ngrx/store';

export enum ActionTypes {
  PRODUCTS = '[Routing] Products navigation',
  TODOS = '[Routing] Todos navigation'
}

export class RoutingAction implements Action {
  readonly type: string;
  readonly payload: { url: string, query: { page: number } };

  constructor(payload: any) {
    this.payload = payload;
  }
}

export type Actions = RoutingAction;
