import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clothing } from 'src/app/interfaces/Clothing';
import { CartService } from 'src/app/services/cart.service';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  public clothes!: Clothing[];
  public clothesAux: any[] = [];

  public filtergender = '';
  public am:number = 0;
  public amounts!:number[];
  private sub: any;
  public id:number = 0;

  public st:boolean = false;
  constructor(
    private _clthService:ClothingService,
    private _cartService:CartService,
    private route:ActivatedRoute
  ) {
    this.clothes = [];
    this.amounts = [];
   }

  ngOnInit(): void {

    this.id = 0;

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getClothes();
      this.filter('');
      // In a real app: dispatch action to load the details here.
   });

  }

  getClothes(){
    this.clothes = [];
    this.amounts  =[];
    this._clthService.getClothesByCategory(this.id).subscribe(res=>{

      if(res.success){
        this.clothes = res.data;
        this.clothesAux = this.clothes.map( (element: any) => {
          element.amount = 0;
          return element;
        });
      }

      // res.data.forEach((element:Clothing) => {
      //   this.clothes.push(element);
      //   this.amounts.push(0);
      // });
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
    // if(this.amounts[index]>0){
      // }

      if(this.clothesAux[index].amount > 0)
        this.clothesAux[index].amount--;
  }

  add(index:number){
    if(this.clothesAux[index].amount >= 0)
    this.clothesAux[index].amount++;
  }


  ngOnDestroy() {

    this.sub.unsubscribe();

  }

}
