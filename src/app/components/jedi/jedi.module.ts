// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

// Components
import { JediListComponent } from './jedi-list/jedi-list.component';
import { jediListReducer } from './jedi-list/store/reducers/jedi-list.reducer';

@NgModule({
  declarations: [JediListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('jediList', jediListReducer)
  ],
  exports: [JediListComponent]
})
export class JediModule { }
