import * as fromCounterListActions from '../../store/actions/index';
import * as fromCounterListSelectors from '../../store/selectors/index';
import { Counter } from '../../model/counter.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  list$: Observable<Array<Counter>>;
    newItem: string;
    counter: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter = 0;
    this.list$ = this.store.select(fromCounterListSelectors.counterListSelector);
   }

  add() {
    this.store.dispatch(new fromCounterListActions.AddItem(this.counter++, this.newItem));
    this.newItem = '';
  }

  remove(id) {
    this.store.dispatch(new fromCounterListActions.RemoveItem(id));
  }

}
