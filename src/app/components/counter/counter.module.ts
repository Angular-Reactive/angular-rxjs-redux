// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';

// Components
import { CounterComponent } from './counter.component';
import { CounterListComponent } from './counter-list/counter-list.component';

// Reducers
import { reducers } from './store/index';

@NgModule({
  declarations: [CounterComponent, CounterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    // This protects us from adding a state mapping object that it does
    // not expect to the 'forFeature()' method.
    StoreModule.forFeature('counter', reducers)
  ],
  exports: [
    CounterComponent,
    CounterListComponent
  ]
})
export class CounterModule { }
