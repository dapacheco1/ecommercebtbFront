import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { EditmodalComponent } from './components/editmodal/editmodal.component';


@NgModule({
  declarations: [
    AdminMenuComponent,
    BaseAdminComponent,
    CategoryComponent,
    ErrorComponent,
    ModalMessageComponent,
    EditmodalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
