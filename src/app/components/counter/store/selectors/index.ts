import * as fromCounterSelectors from './counter.selectors';
import * as fromCounterListSelectors from './counter-list-selectors';

export const counterStateSelector = fromCounterSelectors.getCounterState;
export const counterDataSelector = fromCounterSelectors.getCounterData;

export const counterListStateSelector = fromCounterListSelectors.getCounterListState;
export const counterListSelector = fromCounterListSelectors.getCounterListData;
