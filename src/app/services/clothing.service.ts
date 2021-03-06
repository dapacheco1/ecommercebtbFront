import { Injectable } from '@angular/core';
import { Clothing } from '../interfaces/Clothing';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';


@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  public clothe!:Clothing;
  private conn:string;

  constructor(private _htttp:HttpClient) {
    this.conn = environment.url;
  }


  initClothing(){
    return this.clothe = {
      id:0,
      category_id:0,
      size_id:0,
      genre_id:0,
      price:0,
      stock:0,
      image:'',
      name:'',
      detail:'',
      status:'A',
      created_at:'',
      updated_at:''
    }
  }

  getClothesByCategory(id:string){
    const route = `${this.conn}clothing/${id}`;
    return this._htttp.get<ResponseServer>(route);
  }


  getAllClothes(){
    const route = `${this.conn}clothing`;
    return this._htttp.get<ResponseServer>(route);
  }

  createClothe(clt:Clothing){
    const route = `${this.conn}clothing`;
    return this._htttp.post<ResponseServer>(route,clt);
  }

  deleteClotheById(id:number){
    const route = `${this.conn}clothing/${id}`;
    return this._htttp.delete<ResponseServer>(route);
  }

  updateClothe(clt:Clothing){
    const route = `${this.conn}clothing/`;
    return this._htttp.put<ResponseServer>(route,clt);
  }
}
