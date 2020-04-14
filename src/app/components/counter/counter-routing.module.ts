// Modules
import { NgModule } from '@angular/core';

// Routing
import { Routes, RouterModule } from '@angular/router';

// Components
import { CounterComponent } from './containers/counter/counter.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'counter-list',
    component: CounterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule {}
