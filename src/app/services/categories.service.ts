import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/Category';
import { ResponseServer } from '../interfaces/ResponseServer';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private cat!:Category;
  private conn:string;

  constructor(
    private _htttp:HttpClient
  ) { 
    this.conn = environment.url;
  }

  initCategory(){
    return this.cat = {
      id:0,
      slug:'',
      detail:'',
      status:'A',
      created_at:'',
      updated_at:''
    };
  }
  
  getCategories(){
    const route = `${this.conn}categories`;
    return this._htttp.get<ResponseServer>(route);
  }

  addCategory(cat:Category){
    const route = `${this.conn}categories`;
    return this._htttp.post<ResponseServer>(route,cat);
  }

  deleteCategoryById(id:number){
    const route = `${this.conn}categories/${id}`;
    return this._htttp.delete<ResponseServer>(route);
  }
}
