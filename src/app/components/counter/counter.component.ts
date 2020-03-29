import { getCounter } from './store/selectors/counter.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app-state';
import * as fromCounter from './store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$;

  constructor(private store: Store<AppState>) {

    this.counter$ = this.store.select(getCounter).pipe();
    console.log('counter$: ', this.counter$);
   }

  ngOnInit(): void {
  }

  increment() {
    const action = new fromCounter.IncrementAction();
    this.store.dispatch(action);
  }

  decrement() {
    const action = new fromCounter.DecrementAction();
    this.store.dispatch(action);
  }

}
