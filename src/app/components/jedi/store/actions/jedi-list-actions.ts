import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from '../../components/jedi-list/jedi-list-constants';
import { Action } from '@ngrx/store';
import { Jedi } from '../../../../model/jedi.model';
import { Update } from '@ngrx/entity';

export enum JediActionTypes {
  ADD_JEDI = '[Jedi] Add Jedi',
  REMOVE_JEDI = '[Jedi] Remove Jedi',
  LOAD_JEDIS = '[Jedi] Load Jedis'
}

let counter = 0;
export class AddJediAction implements Action {
  readonly type = JediActionTypes.ADD_JEDI;
  readonly payload: Jedi;

  constructor(jediId: number, jediName: string) {
    this.payload = {
      id: jediId,
      name: jediName
    };
  }
}

export class RemoveJediAction implements Action {
  readonly type = JediActionTypes.REMOVE_JEDI;
  readonly payload: {id: number};

  constructor(id: number) {
    this.payload = {id};
  }
}


export class LoadJedisAction implements Action {
  readonly type = JediActionTypes.LOAD_JEDIS;

  constructor(public payload: {jedis: Update<Jedi>[]}) {}
}

export type JediActions = AddJediAction |
                          RemoveJediAction |
                          LoadJedisAction;

// export const addJedi = (id: number, name: string) => ({type: ADD_JEDI, payload: {id: counter++, name}});

// export const removeJedi = (id: number) => ({type: REMOVE_JEDI, payload: {id}});

// export const loadJedis = (jedis) => ({type: LOAD_JEDIS, payload: jedis});

