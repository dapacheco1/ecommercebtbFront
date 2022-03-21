import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseServer } from '../interfaces/ResponseServer';
import { Person } from '../interfaces/Person';
import { Gender } from '../interfaces/Gender';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private user!:User;
  private conn:string;

  constructor(private _htttp:HttpClient) {
    this.conn = environment.url;
  }

  initUser(){
    return this.user = {
      person_id:0,//dont change on register form
      rol_id:2, //default rol for register form, only change if ROL table change
      status:'A',
      email:'',
      username:'',
      password:'',
      created_at:'',
      updated_at:''
    }
  }

  registerUser(){
    const route = this.conn+'users';

    return this._htttp.post<ResponseServer>(route,this.user);
  }

  validateLoginUser(us:User){
    const route = this.conn+'users/auth';
    return this._htttp.post<ResponseServer>(route,us);
  }


  buildUserBeforeRegister(us:User,prs:Person,gen:Gender){
    this.user = us;
    prs.genre_id = gen.id;
    this.user.person = prs;
    return this.user;
  }
}
