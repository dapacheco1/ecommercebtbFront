import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'sell',
    loadChildren:()=>import('./sell/sell.module').then(m=>m.SellModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
