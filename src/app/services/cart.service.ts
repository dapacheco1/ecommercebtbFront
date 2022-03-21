import { Injectable } from '@angular/core';
import { Clothing } from '../interfaces/Clothing';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items!:Clothing[];

  constructor() {
    this.initItems();
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
