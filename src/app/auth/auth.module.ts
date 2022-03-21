import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { LoginComponent } from './pages/login/login.component';
import { BaseLoginComponent } from './components/base-login/base-login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderAuthComponent,
    LoginComponent,
    BaseLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
