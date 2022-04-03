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
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ModalDetailsComponent } from './components/modal-details/modal-details.component';
import { ModalEditClothingComponent } from './components/modal-edit-clothing/modal-edit-clothing.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { NgChartsModule } from 'ng2-charts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [
    AdminMenuComponent,
    BaseAdminComponent,
    CategoryComponent,
    ErrorComponent,
    ModalMessageComponent,
    EditmodalComponent,
    InventoryComponent,
    ModalDetailsComponent,
    ModalEditClothingComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgChartsModule,
    PdfViewerModule,
    CustomPipesModule
  ]
})
export class AdminModule { }
