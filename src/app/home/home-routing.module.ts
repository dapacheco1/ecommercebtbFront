import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guard/login.guard';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { CartComponent } from './pages/cart/cart.component';
import { IndexComponent } from './pages/index/index.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';
import { ShoesComponent } from './pages/shoes/shoes.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
      {
        path:'',
        redirectTo:'carousel',
        pathMatch:'full'
      },
      {
        path:'carousel',
        component:CarouselComponent
      },
      {
        path:'cart',
        component:CartComponent,
        canActivate:[LoginGuard]
      },
      {
        path:'category/:id',
        component:ClothingComponent,
      },
      
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
