import { AppState } from 'src/app/store/state';
import { environment } from './../../../environments/environment';
import { MetaReducer, ActionReducer } from '@ngrx/store';



export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: any): AppState => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}
