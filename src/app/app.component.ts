import { AppState } from './store/state/app-state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `<app-counter></app-counter>><br><br>
  <app-jedi-list></app-jedi-list>
  <app-counter-list></app-counter-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }


}
