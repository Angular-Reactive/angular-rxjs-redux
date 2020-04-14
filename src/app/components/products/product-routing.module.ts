import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './containers/product.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailComponent } from './components/product-details/product-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  },
  {
    path: 'create-product',
    component: ProductCreateComponent
  },
  {
    path: 'product-details',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
