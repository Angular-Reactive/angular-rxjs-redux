// Modules
import { ProductEffects } from './store/effects/product.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './product-routing.module';

// Components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductComponent } from './containers/product.component';
import { ProductDetailComponent } from './components/product-details/product-detail.component';
import { ProductsHttpActions } from './store/actions/products-http-actions';

// Store
import { productReducers } from './store/reducers/index';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent],
  imports: [
  CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('products', productReducers),
    EffectsModule.forFeature([ProductEffects]),
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductComponent
  ],
  providers: [
    ProductsHttpActions
  ]
})
export class ProductsModule { }
