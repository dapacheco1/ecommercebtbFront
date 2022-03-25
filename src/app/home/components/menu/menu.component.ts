import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { Clothing } from 'src/app/interfaces/Clothing';
import { User } from 'src/app/interfaces/User';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public user!:User;
  public menuDataStatus:boolean = false;
  public items!:Clothing[];
  public cats:Category[] = [];

  constructor(
    private _userService:UserServicesService,
    private router:Router,
    private _catService:CategoriesService) {
      this.items = [];
    }

  ngOnInit(): void {
    this.loadCategories();
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


  addItem(newItem: Clothing) {
    this.items.push(newItem );
  }

  public logOut(){
    localStorage.clear();
    this.menuDataStatus = false;
    this.router.navigateByUrl('');
  }



  redirect(cat:string){
    this.router.navigateByUrl(`/category/${cat}`);
  }

  loadCategories(){
    this._catService.getCategories().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Category)=> {
          this.cats.push(item);
        });
      }else{
        alert(res.message)
      }
    });
  }



}
