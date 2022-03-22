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

  public cart!:Cart;

  constructor(
    private _crtService:CartService
  ) { }

  ngOnInit(): void {

    this.loadItems();

  }

  private loadItems(){
    const aux:any = localStorage.getItem('items');
    const usaux:any = localStorage.getItem('user');
    const cr:any = JSON.parse(aux);
    const cu:any = JSON.parse(usaux);

    const shoes:Clothing[] = [];
    const pants:Clothing[] = [];
    const shirts:Clothing[] = [];

    //find amount by category
    cr.forEach((element:Clothing) =>{
      switch(element.category_id){
          case 1:
            shoes.push(element);
            break;
          case 2:
            pants.push(element);
            break;
          case 3:
            shirts.push(element);
            break;
          default:
            console.log('not available');
            break;
      }
    });
    console.log(shoes);
  }

}
