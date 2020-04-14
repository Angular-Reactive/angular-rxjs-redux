import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { JediListComponent } from './components/jedi/containers/jedi-list.component';

// AppComponent will be eager loaded
export const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import ('../app/components/counter/counter.module').then(m => m.CounterModule)
  },
  { path: 'jedi',
    loadChildren: () => import ('../app/components/jedi/jedi.module').then(m => m.JediModule)
  },
  {
    path: 'products',
    loadChildren: () => import ('../app/components/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'user',
    loadChildren: () => import ('../app/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
