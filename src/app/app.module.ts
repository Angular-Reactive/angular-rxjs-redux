// Modules
import { JediModule } from './components/jedi/jedi.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { storeFreeze} from 'ngrx-store-freeze';
import { ProductsModule } from './components/products/products.module';
import { CounterModule } from './components/counter/counter.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

export const metaReducers: MetaReducer<any>[] =
!environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    EffectsModule.forRoot([]),
    JediModule,
    CounterModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
