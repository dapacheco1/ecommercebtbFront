import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminGuard } from '../auth/guard/admin.guard';

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
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
