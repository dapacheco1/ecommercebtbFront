import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/Cart';
import { Clothing } from '../interfaces/Clothing';
import { ResponseServer } from '../interfaces/ResponseServer';
import { User } from '../interfaces/User';
import { ClothingService } from './clothing.service';
import { UserServicesService } from './user-services.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items!:Clothing[];
  private cart!:Cart;

  private conn:string;

  constructor(
    private _htttp:HttpClient,
    private _usr:UserServicesService,
    private _clt:ClothingService) {
    this.conn = environment.url;
  }

  public initCart(){
    return this.cart = {
      id:0,
      user_id:0,
      clothing_id:0,
      amount:0,
      total:0,
      status:'',
      created_at:'',
      updated_at:'',
      user:this._usr.initUser(),
      clothing:this._clt.initClothing()

    };
  }


  transformClothingToCart(itemId:number,am:number,price:number){
    return this.cart = {
      id:0,
      user_id:this.getUserId(),
      clothing_id:itemId,
      amount:am,
      total:price*am,
      status:'P',
      created_at:'',
      updated_at:'',
      user:this._usr.initUser(),
      clothing:this._clt.initClothing()
    }
  }


  public getUserId(){
    const aux:any = localStorage.getItem('user');
    const us:User = JSON.parse(aux);
    return us.id;
  }

  addProduct(item:Cart){
    const route = `${this.conn}cart`;
    return this._htttp.post<ResponseServer>(route,item);
  }

  getUserCart(){
    const id = this.getUserId();
    const route = `${this.conn}cart/${id}`;
    return this._htttp.get<ResponseServer>(route);
  }

  updateUserCart(item:Cart){
    const route = `${this.conn}cart/update`;
    return this._htttp.post<ResponseServer>(route,item);
  }

  deleteCartByUserId(){
    const id = this.getUserId();
    const route = `${this.conn}cart/${id}`;
    return this._htttp.delete<ResponseServer>(route);
  }
}
