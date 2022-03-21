import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  public shoes!:Clothing[];
  public filtergender = '';

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
      console.log(res);
      res.data.forEach((element:Clothing) => {
        this.shoes.push(element);
      });
    });
  }

  addCart(clot:Clothing){
    this._cartService.addProduct(clot);
    alert('Product added to your cart');
  }



}
