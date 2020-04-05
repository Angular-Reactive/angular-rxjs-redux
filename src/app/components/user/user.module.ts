// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

// Store
import { userReducers } from './store/index';
import { UserComponent } from './user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [UserComponent, EditUserComponent],
  imports: [
  CommonModule,
  FormsModule,
  StoreModule.forFeature('user', userReducers)
  ],
  exports: [UserComponent]
})
export class UserModule { }
