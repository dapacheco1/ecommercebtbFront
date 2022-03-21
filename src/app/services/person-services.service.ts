import { Injectable } from '@angular/core';
import { Person } from '../interfaces/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServicesService {

  private person!:Person;

  constructor() { }

  initPerson(){
    return this.person = {
      id:0,
      identifierDocument:'',
      names:'',
      lastnames:'',
      genre_id:0,//change when genre table update
      status:'A',
      created_at:'',
      updated_at:''
    };
  }

}
