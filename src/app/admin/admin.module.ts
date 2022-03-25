import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { CategoryComponent } from './pages/category/category.component';


@NgModule({
  declarations: [
    AdminMenuComponent,
    BaseAdminComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
