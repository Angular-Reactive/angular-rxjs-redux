// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

// Components
import { JediListComponent } from './containers/jedi-list.component';
import { jediListReducer } from './store/reducers/jedi-list.reducer';
import { jediReducers } from './store/reducers';
import { JediRoutingModule } from './jedi-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('jediList', jediReducers),
    JediRoutingModule
  ],
  declarations: [JediListComponent]
})
export class JediModule { }
