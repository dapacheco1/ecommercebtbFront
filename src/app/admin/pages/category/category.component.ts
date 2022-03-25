import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public cats:Category[] = [];

  constructor(
    private _catService:CategoriesService
  ) { 

  }

  ngOnInit(): void {
    this.loadCurrentCategories();
  }


  loadCurrentCategories(){
    this._catService.getCategories().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Category) => {
          this.cats.push(item);
        });
        
      }else{
        alert(res.message);
      }
    });
  }

}
