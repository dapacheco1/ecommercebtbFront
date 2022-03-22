import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/Cart';
import { Clothing } from '../interfaces/Clothing';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items!:Clothing[];
  private cart!:Cart;

  constructor() {
    this.initItems();
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

    };
  }

  private initItems(){
    const aux:any = localStorage.getItem('items');
    if(aux){
      this.items = JSON.parse(aux);
    }else{
      this.items = [];
    }


  }

  addProduct(item:Clothing){

    this.items.push(item);
    localStorage.setItem('items',JSON.stringify(this.items));
  }
}
