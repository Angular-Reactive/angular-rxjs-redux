import * as fromCounterActions from './counter.actions';
import * as fromCounterListActions from './counter-list.actions';

export const IncrementCounter = fromCounterActions.IncrementAction;
export const DecrementCounter = fromCounterActions.DecrementAction;

export const AddItem = fromCounterListActions.AddItemAction;
export const RemoveItem = fromCounterListActions.RemoveItemAction;

export type CounterActions = fromCounterActions.IncrementAction |
                             fromCounterActions.DecrementAction;

export type CounterListActions = fromCounterListActions.AddItemAction |
                                 fromCounterListActions.RemoveItemAction;
