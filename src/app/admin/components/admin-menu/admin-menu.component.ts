import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  public user!:User;


  constructor(
    private _userService:UserServicesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.user = this._userService.initUser();
    this.loadUserData();
  }


  loadUserData(){
    const aux:any= localStorage.getItem('user');
    if(aux){
      this.user = JSON.parse(aux);
    }
  }

  public logOut(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
