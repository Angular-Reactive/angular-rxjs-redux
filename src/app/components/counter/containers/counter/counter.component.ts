import * as fromCounterSelectors from '../../store/selectors/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromCounterActions from '../../store/actions/index';
import * as fromStore from 'src/app/store/state';
import { Observable } from 'rxjs';
import { getCounterData } from '../../store/reducers/counter.reducer';
import { tap, map } from 'rxjs/operators';

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
    this.counter$ = this.store.select(fromCounterSelectors.counterDataSelector);
  }

  increment() {
    this.store.dispatch(new fromCounterActions.IncrementCounter(this.counter++));
  }

  decrement() {
    const action = new fromCounterActions.DecrementCounter(this.counter--);
    this.store.dispatch(action);
  }

}
