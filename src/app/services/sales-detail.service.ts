import { Injectable } from '@angular/core';
import { SalesDetail } from '../interfaces/SalesDetails';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailService {

  private details!:SalesDetail;
  constructor() { }


  initDetails(){
    return this.details = {
      id:0,
      sale_id:0,
      clothing_id:0,
      amount:0,
      clothingprice:0,
      totalprice:0,
      created_at:'',
      updated_at:'',
    };
  }
}
