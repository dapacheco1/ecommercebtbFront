import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';
import { Sales } from '../interfaces/Sales';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private sale!:Sales;
  private conn:string;

  constructor(
    private _htttp:HttpClient,
    private _cartService:CartService
  ) {
    this.conn = environment.url;
  }


  initSale(){
    return this.sale = {
      id:0,
      user_id:0,
      saleDate:'',
      saleHour:'',
      subtotal:0,
      taxIVA:0,
      total:0,
      status:'P',
      created_at:'',
      updated_at:''
    };
  }


  buildSale(sales:Sales){
    const date = new Date();
    sales.saleDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    sales.saleHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    sales.status = 'S';
  }

  registerSale(sale:Sales){
    const route = `${this.conn}sell`;
    return this._htttp.post<ResponseServer>(route,sale);
  }

  historySale(){
    const id = this._cartService.getUserId();
    const route = `${this.conn}sell/${id}`;
    return this._htttp.get<ResponseServer>(route);
  }
}
