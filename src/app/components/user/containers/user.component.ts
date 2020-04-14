import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { UserActions, UserSelectors } from '../store/index';
import { map, tap } from 'rxjs/operators';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: string;
  id = 1;

  // Getting the entities dictionary as a list
  users$ = this.store.select(UserSelectors.getUsersEntities).pipe(
    map(this.toArray),
    tap((data) => console.log(data))
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

    this.store.dispatch(new UserActions.AddUserAction(newUser));
    this.user = '';
  }

  onUpdateUser(user: User) {
    this.store.dispatch(new UserActions.UpdateUserAction(user));
  }

  onDeleteUser(id: number) {
    this.store.dispatch(new UserActions.DeleteUserAction({id}));
  }

  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }

}
