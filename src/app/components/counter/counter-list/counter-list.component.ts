import { getCounterList } from './../store/selectors/counter.selectors';
import { Counter } from './../model/counter.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/state/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromCounterList from '../store/actions/counter-list.actions';
import { getCounter } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  list$: Observable<Array<Counter>>;
    newItem: string;
    counter: number;

  constructor(private store: Store<AppState>) {
    this.counter = 0;
    this.list$ = this.store.select(getCounterList).pipe(
      tap((state) => console.log('list$ 0: ', state)),
      map(state => {
        return state.list;
      }),
      tap((state) => console.log('list$ 1: ', state))
    );
  }

  ngOnInit(): void { }

  add() {
    const action = new fromCounterList.AddItemAction(this.counter++, this.newItem);
    this.store.dispatch(action);
    this.newItem = '';
  }

  remove(id) {
    const action = new fromCounterList.RemoveItemAction(id);
    this.store.dispatch(action);
  }

}
