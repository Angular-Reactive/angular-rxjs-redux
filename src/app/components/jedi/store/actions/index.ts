import * as fromJediListActions from './jedi-list-actions';

export const LoadJedi = fromJediListActions.LoadJedisAction;
export const RemoveJedi = fromJediListActions.RemoveJediAction;
export const AddJedi = fromJediListActions.AddJediAction;

export type JediActions = fromJediListActions.LoadJedisAction |
                          fromJediListActions.RemoveJediAction |
                          fromJediListActions.AddJediAction;
