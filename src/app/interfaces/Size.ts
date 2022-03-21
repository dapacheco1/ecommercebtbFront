import { Category } from "./Category"

export interface Size{
    id:number,
    category_id:number,
    size:string,
    status:string,
    created_at:string,
    updated_at:string,
    category?:Category
}