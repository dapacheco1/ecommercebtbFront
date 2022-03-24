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
import { FilterByGenderComponent } from './components/filter-by-gender/filter-by-gender.component';
import { CartComponent } from './pages/cart/cart.component';
import { ClothingComponent } from './components/clothing/clothing.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    CarouselComponent,
    ShoesComponent,
    PantsComponent,
    ShirtsComponent,
    FilterPipe,
    FilterByGenderComponent,
    CartComponent,
    ClothingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
