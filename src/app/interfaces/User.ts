import { Person } from "./Person";

export interface User{
  person_id:number,
  rol_id:number,
  status:string,
  email:string,
  username:string,
  password:string,
  created_at:string,
  updated_at:string,
  person?:Person
}
