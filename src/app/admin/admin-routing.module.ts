import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminGuard } from '../auth/guard/admin.guard';
import { InventoryComponent } from '../admin/pages/inventory/inventory.component';
import { ReportsComponent } from './pages/reports/reports.component';

import * as printJS from 'print-js'

const routes: Routes = [
  {
    path:'',
    component:BaseAdminComponent,
    children:[
      {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
      },
      {
        path:'category',
        component:CategoryComponent,
        canActivate:[AdminGuard],
      },
      {
        path:'inventory',
        component:InventoryComponent,
        canActivate:[AdminGuard]
      },
      {
        path:'report',
        component:ReportsComponent,
        canActivate:[AdminGuard]
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
