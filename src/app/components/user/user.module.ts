// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

// Store
import { userReducers } from './store/index';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
  CommonModule,
    StoreModule.forFeature('user', userReducers)
  ],
  exports: [UserComponent]
})
export class UserModule { }
