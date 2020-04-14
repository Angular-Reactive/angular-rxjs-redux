import { CounterActions, CounterSelectors } from '../../store//index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromStore from 'src/app/store/state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$;
  counter = 1;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(CounterSelectors.getCounterData);
  }

  increment() {
    // this.store.dispatch(new fromCounterActions.IncrementCounter(this.counter++));
    this.store.dispatch(new CounterActions.IncrementAction(this.counter++));
  }

  decrement() {
    const action = new CounterActions.DecrementAction(this.counter--);
    this.store.dispatch(action);
  }

}
