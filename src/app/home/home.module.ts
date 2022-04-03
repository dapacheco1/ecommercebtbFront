import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';

import { FilterByGenderComponent } from './components/filter-by-gender/filter-by-gender.component';
import { CartComponent } from './pages/cart/cart.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    CarouselComponent,
    FilterByGenderComponent,
    CartComponent,
    ClothingComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CustomPipesModule
  ]
})
export class HomeModule { }
