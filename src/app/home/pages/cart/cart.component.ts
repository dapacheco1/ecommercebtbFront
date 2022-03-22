import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart!:Cart[];
  public total:number = 0;

  constructor(
    private _crtService:CartService
  ) { 
    this.cart = [];
  }

  ngOnInit(): void {

    this.loadCart();
    
  }


  loadCart(){
    this._crtService.getUserCart().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Cart) => {
          this.cart.push(item);
        });
        this.calcTotal();
      }else{
        alert(res.message);
      }
      
    });
  }

  private calcTotal(){
    this.cart.forEach((item:Cart)=>{
      this.total += item.total;
    });
  }

}
