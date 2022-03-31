import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { FormValidationsService } from 'src/app/services/form-validations.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user!:User;
  public status:boolean = true;
  public msg:string = '';

  constructor(
    private _userService:UserServicesService,
    private _dataForm:FormValidationsService,
    private _router:Router) { }

  ngOnInit(): void {
    this.user = this._userService.initUser();
  }


  validateUser(){
    if(this.validateDataFormLogin()){
      this._userService.validateLoginUser(this.user).subscribe(res=>{
      
        if(res.success){
          alert(res.message);
          this.status = true;
          localStorage.setItem('user',JSON.stringify(res.data));
          this._router.navigateByUrl('');
        }else{
          this.msg = res.message;
          this.status = false;
        }
        
      });
    }
    
  }


  validateDataFormLogin(){
    this.msg ='';
    const us = this._dataForm.onlyLettersAndNumbers(this.user.username,"Username");
    const pass = this._dataForm.validatePassword(this.user.password);
    if(us.success && pass.success){
      return true;
    }else{
      if(!us.success){
        if(this.user.username==''){
          this.msg += ` *Username is required`;
        }else{
          this.msg += ` *${us.message}`;
        }
        
      }

      if(!pass.success){
        if(this.user.password==''){
          this.msg += ` *Password is required`;
        }else{
          this.msg += ` *${pass.message}`;
        }
        
      }

      this.status = false;
      return false;
    }
  }




}
