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
    this.total = 0;
    this.cart.forEach((item:Cart)=>{
      this.total += item.total;
    });
  }



  substractUp(cart:Cart,id:number){
    cart.amount--;
    cart.total = cart.clothing?.price * cart.amount;
    if(cart.amount>=0){
      if(cart.amount == 0){
        this.cart.splice(id,1);
      }
      this._crtService.updateUserCart(cart).subscribe(res =>{
        if(res.success){
          this.cart[id].total = cart.total;
        }else{
          alert(res.message);
        }

      });
    }

    this.calcTotal();

  }

  addUp(cart:Cart,id:number){
    cart.amount++;
    cart.total = cart.clothing?.price * cart.amount;

    this._crtService.updateUserCart(cart).subscribe(res =>{
      if(res.success){
        this.cart[id].total = cart.total;
      }else{
        alert(res.message);
      }

    });

    this.calcTotal();
  }

  updateCart(event:any,cart:Cart,id:number){
    cart.amount = event.target.value;
    cart.total = cart.clothing?.price * cart.amount;
    if(cart.amount>=0){
      if(cart.amount == 0){
        this.cart.splice(id,1);
      }
      this._crtService.updateUserCart(cart).subscribe(res =>{
        if(res.success){
          this.cart[id].total = cart.total;
        }else{
          alert(res.message);
        }

      });

    }else{
      alert("May need to type an input major to zero");
    }


    this.calcTotal();


  }

}
