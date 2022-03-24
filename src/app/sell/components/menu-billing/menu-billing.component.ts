import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/User';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-menu-billing',
  templateUrl: './menu-billing.component.html',
  styleUrls: ['./menu-billing.component.scss']
})
export class MenuBillingComponent implements OnInit {
  public user!:User;
  public menuDataStatus:boolean = false;

  constructor(
    private _userService:UserServicesService,
    private router:Router) {

    }

  ngOnInit(): void {
    this.user = this._userService.initUser();
    this.verifiyLoggedUser();
  }

  private verifiyLoggedUser(){
    const aux:any= localStorage.getItem('user');
    if(aux){
      this.user = JSON.parse(aux);
      this.menuDataStatus = true;
    }else{
      this.menuDataStatus = false;
    }
  }


  public logOut(){
    localStorage.clear();
    this.menuDataStatus = false;
    this.router.navigateByUrl('');
  }

}
