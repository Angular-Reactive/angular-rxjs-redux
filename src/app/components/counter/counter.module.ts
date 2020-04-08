// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';

// Components
import { CounterComponent } from './containers/counter/counter.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';

// Reducers
import { reducers } from './store';

@NgModule({
  declarations: [ CounterComponent, CounterListComponent ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('counter', reducers)
  ],
  exports: [
    CounterComponent,
    CounterListComponent
  ]
})
export class CounterModule { }
