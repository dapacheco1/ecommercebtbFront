import { Injectable } from '@angular/core';
import { Gender } from '../interfaces/Gender';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private gender!:Gender;
  private conn:string;

  constructor(private _htttp:HttpClient) {
    this.conn = environment.url;
  }

  initGender(){
    return this.gender = {
      id:0,
      genre:'',
      status:'',
      created_at:'',
      updated_at:''
    }
  }

  obtainCurrentGenders(){
    const route = this.conn+'genre';
    const genders:any = [];
    this._htttp.get<ResponseServer>(route).subscribe(res=>{
      res.data.forEach((item:Gender) => {
        genders.push(item);
      });
    });
    return genders;
  }
}
