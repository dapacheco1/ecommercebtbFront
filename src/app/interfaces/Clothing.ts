import { Category } from "./Category";
import { Gender } from "./Gender";
import { Size } from "./Size";

export interface Clothing{
    id:number,
    category_id:number,
    size_id:number,
    price:number,
    stock:number,
    image:string,
    name:string,
    detail:string,
    genre_id:number,
    status:string,
    created_at:string,
    updated_at:string,
    category?:Category,
    size?:Size,
    genre?:Gender
}