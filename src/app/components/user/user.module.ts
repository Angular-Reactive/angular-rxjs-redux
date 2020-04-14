// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Store
import { userReducers } from './store/reducers/index';
import { UserComponent } from './containers/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { routes } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, EditUserComponent],
  imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(routes),
  StoreModule.forFeature('user', userReducers)
  ],
  exports: [UserComponent]
})
export class UserModule { }
