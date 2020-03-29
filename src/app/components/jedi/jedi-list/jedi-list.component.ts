import { addJedi, removeJedi, loadJedis } from './store/actions/jedi-list-actions';
import { Jedi } from '../../../model/jedi.model';
import { AppState } from '../../../store/state/app-state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jedi-list',
  template: `
  <div *ngFor="let jedi of list$ | async">
    {{ jedi.name }}<button (click)="remove(jedi.id)">Remove</button>
  </div>
  <input id="newJedi" type="text" [(ngModel)]="newJedi" placeholder="" />
  <button (click)="add()">Add</button>
  <button (click)="clear()">Clear</button> `
})
export class JediListComponent {
  list$: Observable<Array<Jedi>>;
  counter = 0;
  newJedi = '';

  constructor(private store: Store<AppState>) {
    this.list$ = this.store.select('jediList');
  }

  add() {
    this.store.dispatch(addJedi(this.counter++, this.newJedi));

    this.newJedi = '';
  }

  remove(id) {
    this.store.dispatch(removeJedi(id));
  }

  clear() {
    this.store.dispatch(loadJedis([]));
    this.counter = 0;
  }
}
