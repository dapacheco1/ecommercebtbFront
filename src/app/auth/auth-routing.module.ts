import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLoginComponent } from './components/base-login/base-login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:BaseLoginComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginComponent,
        canActivate:[LogoutGuard]
      },
      {
        path:'register',
        component:RegisterComponent,
        canActivate:[LogoutGuard]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
