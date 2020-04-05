import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app-state';
import * as fromUserSelectors from './store/selectors/user.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Getting the entities dictionary as a list
  users$ = this.store.select(fromUserSelectors.getUsers).pipe(
    map(this.toArray)
  );

  constructor(private store: Store<AppState>) {
    this.users$.subscribe(users => console.log('users:', users));
  }

  ngOnInit(): void {
  }

  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }

}
