import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/interfaces/Clothing';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  public shoe!:Clothing;
  public shoes!:Clothing[];

  constructor(
    private _clthService:ClothingService,
  ) {
    this.shoes = [];
   }

  ngOnInit(): void {
    //this.shoe = this._clthService.initClothing();
    this.getShoes();
  }

  getShoes(){
    this._clthService.getClothesByCategory(1).subscribe(res=>{
      console.log(res);
      res.data.forEach((element:Clothing) => {
        this.shoes.push(element);
      });
    });
  }

}
