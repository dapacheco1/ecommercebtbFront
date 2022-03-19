import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
