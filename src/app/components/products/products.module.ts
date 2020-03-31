// Modules
import { ProductEffects } from './store/effects/product.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product.component';

// Store
import { productReducers } from './store/index';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducers),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [
    ProductComponent
  ],
  providers: []
})
export class ProductsModule { }
