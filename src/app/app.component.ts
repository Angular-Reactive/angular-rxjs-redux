import { AppState } from './store/state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRouterState } from './store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$;

  constructor(private store: Store<AppState>) {
    const routing$: Observable<any> = store.select(getRouterState);

    routing$.subscribe(
      (state) => console.log('router obj: ', state)
    );
  }
}
