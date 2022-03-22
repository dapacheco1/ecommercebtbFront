import { Clothing } from "./Clothing";
import { User } from "./User";

export interface Cart{
  id:number,
  user_id:number,
  clothing_id:number,
  amount:number,
  total:number,
  status:string,
  created_at:string,
  updated_at:string,
  user:User,
  clothing:Clothing
}
