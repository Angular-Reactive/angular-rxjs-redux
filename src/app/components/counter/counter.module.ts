// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';

// Components
import { CounterComponent } from './containers/counter/counter.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';

// Routing
import { routes, CounterRoutingModule } from './counter-routing.module';

// Reducers
import { reducers } from './store/reducers/index';

@NgModule({
  declarations: [ CounterComponent, CounterListComponent ],
  imports: [
CommonModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature('counter', reducers),
    RouterModule.forChild(routes)
  ],
  exports: [
    CounterComponent,
    CounterListComponent
  ]
})
export class CounterModule { }
