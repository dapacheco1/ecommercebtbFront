import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    CarouselComponent,
    ShoesComponent,
    PantsComponent,
    ShirtsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
