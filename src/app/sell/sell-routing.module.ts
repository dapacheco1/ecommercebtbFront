import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseBillingComponent } from './components/base-billing/base-billing.component';
import { BillingComponent } from './pages/billing/billing.component';
import { LoginGuard } from '../auth/guard/login.guard';
import { ClientGuard } from '../auth/guard/client.guard';

const routes: Routes = [
  {
    path:'',
    component:BaseBillingComponent,
    children:[
      {
        path:'',
        redirectTo:'billing',
        pathMatch:'full',
      },
      {
        path:'billing',
        component:BillingComponent,
        canActivate:[LoginGuard,ClientGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
