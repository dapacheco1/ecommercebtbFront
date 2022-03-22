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

  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService
  ) {
    this.shirts = [];
   }

  ngOnInit(): void {

    this.getShirts();
  }

  getShirts(){
    this._clthService.getClothesByCategory(3).subscribe(res=>{
      console.log(res);
      res.data.forEach((element:Clothing) => {
        this.shirts.push(element);
      });
    });
  }


  addCart(clot:Clothing){
    this._cartService.addProduct(clot);
    alert('Product added to your cart');
  }

  filter(ev:any){
    this.filtergender =ev;
  }

}
