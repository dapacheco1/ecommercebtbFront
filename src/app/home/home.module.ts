import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    CarouselComponent,
    ShoesComponent,
    PantsComponent,
    ShirtsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
