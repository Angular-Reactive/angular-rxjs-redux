import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
