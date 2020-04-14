import { JediListActions, JediListSelectors } from '../store/index';
import { Jedi } from '../../../model/jedi.model';
import { AppState } from '../../../store/state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html'
})
export class JediListComponent {
  // list$: Observable<Array<Jedi>>;
  list$ = this.store.select(JediListSelectors.getJedis).pipe(
    map(this.toArray)
  );
  counter = 0;
  newJedi = '';

  constructor(private store: Store<AppState>) {
    // this.list$ = this.store.select(fromJediSelectors.getJedis).pipe(
    //   map(this.toArray)
    // );

    this.list$.subscribe(jedis => console.log('jedis: ', jedis));
  }

  add() {
    this.store.dispatch(new JediListActions.AddJediAction(this.counter++, this.newJedi));

    this.newJedi = '';
  }

  remove(id) {
    this.store.dispatch(new JediListActions.RemoveJediAction(id));
  }

  clear() {
    const data: Jedi [] = [];
    const allUpdates = data.map(jedi => Object.assign({}, {id: null, changes: jedi}));

    this.store.dispatch(new JediListActions.LoadJedisAction({jedis: allUpdates}));

    this.counter = 0;
  }

  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }
}
