import { Clothing } from "./Clothing";

export interface SalesDetail{
    id:number,
    sale_id:number,
    clothing_id:number,
    amount:number,
    clothingprice:number,
    totalprice:number,
    created_at:string,
    updated_at:string,
    clothing?:Clothing
}