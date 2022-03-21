import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
