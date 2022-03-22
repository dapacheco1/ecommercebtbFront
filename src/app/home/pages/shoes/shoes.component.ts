import { Component, Input, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';
import { Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  public shoes!:Clothing[];
  public filtergender = '';
  public am:number = 0;
  public amounts!:number[];

  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService
  ) {
    this.shoes = [];
    this.amounts = [];
   }

  ngOnInit(): void {
    //this.shoe = this._clthService.initClothing();
    this.getShoes();
  }

  getShoes(){
    this._clthService.getClothesByCategory(1).subscribe(res=>{
      res.data.forEach((element:Clothing) => {
        this.shoes.push(element);
        this.amounts.push(0);
      });
    });
  }

  addCart(clot:Clothing,index:number){
    if(this.amounts[index]==0){
      alert("Please select the amount of this products");
    }else{
      const ax:any = this._cartService.transformClothingToCart(clot.id,this.amounts[index],clot.price);
      this._cartService.addProduct(ax).subscribe(res=>{
        console.log(res.message);
        alert('Product added to your cart');
      });
    }


  }


  filter(ev:any){
    this.filtergender =ev;
  }


  substract(index:number){
    if(this.amounts[index]>0){
      this.amounts[index]--;
    }
  }

  add(index:number){
    this.amounts[index]++;
  }


}
