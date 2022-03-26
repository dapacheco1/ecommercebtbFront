import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';
import { Size } from '../interfaces/Size';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private size!:Size;
  private conn:string;

  constructor(private _htttp:HttpClient) {
    this.conn = environment.url;
  }

  initSize(){
    return this.size = {
      id:0,
      category_id:0,
      size:'',
      status:'',
      created_at:'',
      updated_at:'',
    }
  }


  getAllSizes(){
    const route = `${this.conn}sizes`;
    return this._htttp.get<ResponseServer>(route);
  }
}
