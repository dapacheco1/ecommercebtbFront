import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { BaseBillingComponent } from './components/base-billing/base-billing.component';
import { BillingComponent } from './pages/billing/billing.component';
import { MenuBillingComponent } from './components/menu-billing/menu-billing.component';


@NgModule({
  declarations: [
    BaseBillingComponent,
    BillingComponent,
    MenuBillingComponent
  ],
  imports: [
    CommonModule,
    SellRoutingModule
  ]
})
export class SellModule { }
