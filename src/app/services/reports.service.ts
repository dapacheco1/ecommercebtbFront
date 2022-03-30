import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';
import { SalesDetail } from '../interfaces/SalesDetails';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private detail!:SalesDetail;
  private conn:string;

  constructor(private _htttp:HttpClient) {
    this.conn = environment.url;
  }


  getMostSoldByValue(val:number){
    const route = `${this.conn}reports/${val}`;
    return this._htttp.get<ResponseServer>(route);
  }

}
