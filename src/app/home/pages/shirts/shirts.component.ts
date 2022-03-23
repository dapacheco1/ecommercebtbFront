import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss']
})
export class ShirtsComponent implements OnInit {
  public shirts!:Clothing[];
  public filtergender = '';
  public am:number = 0;
  public amounts!:number[];

  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService
  ) {
    this.shirts = [];
    this.amounts = [];
   }

  ngOnInit(): void {

    this.getShirts();
  }

  getShirts(){
    this._clthService.getClothesByCategory(3).subscribe(res=>{
      res.data.forEach((element:Clothing) => {
        this.shirts.push(element);
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
