import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  private _user: User;

  @Input()
  get user() {
    return this._user;
  }

  set user(val) {
    this._user = Object.assign({}, val);
  }

  @Output()
  update = new EventEmitter<User>();

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  updateUser() {
    this.update.emit(this._user);
  }

  deleteUser() {
    this.delete.emit(this._user.id);
  }

}
