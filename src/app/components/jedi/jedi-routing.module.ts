 import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './containers/jedi-list.component';
import { ModuleWithProviders, NgModule } from '@angular/core';

 const routes: Routes = [
   {
     path: '', component: JediListComponent
   }
 ];

 @NgModule({
   imports: [ RouterModule.forChild(routes)],
   exports: [ RouterModule ]
 })
 export class JediRoutingModule {}
