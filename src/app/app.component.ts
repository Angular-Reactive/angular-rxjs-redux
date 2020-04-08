import { AppState } from './store/state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }


}
