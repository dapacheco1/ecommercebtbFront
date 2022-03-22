import { Component, Input, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  public shoes!:Clothing[];
  public filtergender = '';
  public am:number = 0;

  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService
  ) {
    this.shoes = [];
   }

  ngOnInit(): void {
    //this.shoe = this._clthService.initClothing();
    this.getShoes();
  }

  getShoes(){
    this._clthService.getClothesByCategory(1).subscribe(res=>{
      res.data.forEach((element:Clothing) => {
        this.shoes.push(element);
      });
    });
  }

  addCart(clot:Clothing){
    const ax = this._cartService.transformClothingToCart(clot.id,this.am,clot.price);
    this._cartService.addProduct(ax).subscribe(res=>{
      console.log(res.message);
      alert('Product added to your cart');
    });
    
  }


  filter(ev:any){
    this.filtergender =ev;
  }



}
