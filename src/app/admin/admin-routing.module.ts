import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminGuard } from '../auth/guard/admin.guard';
import { InventoryComponent } from '../admin/pages/inventory/inventory.component';

const routes: Routes = [
  {
    path:'',
    component:BaseAdminComponent,
    children:[
      {
        path:'',
        redirectTo:'categorycrud',
        pathMatch:'full'
      },
      {
        path:'categorycrud',
        component:CategoryComponent,
        canActivate:[AdminGuard],
      },
      {
        path:'inventory',
        component:InventoryComponent,
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
