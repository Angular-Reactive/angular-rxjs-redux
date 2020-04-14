import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './containers/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
