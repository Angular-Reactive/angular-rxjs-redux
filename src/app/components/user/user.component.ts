import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app-state';
import * as fromUserSelectors from './store/selectors/user.selectors';
import * as fromUserActions from './store/actions/user.actions';
import { map, tap } from 'rxjs/operators';
import { User } from './model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: string;
  id = 1;

  // Getting the entities dictionary as a list
  users$ = this.store.select(fromUserSelectors.getUsers).pipe(
    map(this.toArray)
  );

  constructor(private store: Store<AppState>) {
    this.users$.subscribe(users => console.log('users:', users));
  }

  ngOnInit(): void {
  }

  addUser() {
    const newUser = {
      id: this.id++,
      name: this.user
    };

    this.store.dispatch(new fromUserActions.AddUserAction(newUser));
    this.user = '';
  }

  onUpdateUser(user: User) {
    this.store.dispatch(new fromUserActions.UpdateUserAction(user));
  }

  onDeleteUser(id: number) {
    this.store.dispatch(new fromUserActions.DeleteUserAction({id}));
  }

  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }

}
