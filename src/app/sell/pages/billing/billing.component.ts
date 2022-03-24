import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';
import { Clothing } from 'src/app/interfaces/Clothing';
import { Sales } from 'src/app/interfaces/Sales';
import { BillingService } from 'src/app/services/billing.service';
import { CartService } from 'src/app/services/cart.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  public sale!:Sales;
  public history!:Sales[];
  public cart!:Cart[];
  public total:number = 0;

  constructor(
    private _cartService:CartService,
    private _blService:BillingService,
    private _userService:UserServicesService
  ) { }

  ngOnInit(): void {
    this.history = [];
    this.sale = this._blService.initSale();
    this.cart = [];
    this.loadDataSale();
    this.loadHistorySale();
  }

  loadHistorySale(){
    this.history = [];
    this._blService.historySale().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Sales)=>{
          this.history.push(item);
        });
      }
    });

  }


  loadDataSale(){

    const id = this._cartService.getUserId();
    this.sale.user_id = id;

    //loadCart
    this._cartService.getUserCart().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Cart) => {
          this.cart.push(item);
        });
        this.calcTotal();
        this.sale.subtotal = this.total;
        this.sale.taxIVA = (Number)((this.total * 0.12).toFixed(2));
        this.sale.total = (Number)((this.sale.subtotal + this.sale.taxIVA).toFixed(2));

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


  makeSale(){
    this._blService.buildSale(this.sale);
    this._blService.registerSale(this.sale).subscribe(res=>{
      console.log(res);

      if(res.success){
        this.sale = this._blService.initSale();
        this.loadHistorySale();
      }else{
        alert(res.message);
      }


    });
  }
}
