import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.scss']
})
export class PantsComponent implements OnInit {

  public pants!:Clothing[];

  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService
  ) {
    this.pants = [];
  }

  ngOnInit(): void {
    this.getPants();
  }

  getPants(){
    this._clthService.getClothesByCategory(2).subscribe(res=>{
      res.data.forEach((element:Clothing) => {
        this.pants.push(element);
      });
    });
  }

  addCart(clot:Clothing){
    this._cartService.addProduct(clot);
    alert('Product added to your cart');
  }

}
