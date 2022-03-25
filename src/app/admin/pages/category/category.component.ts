import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormValidationsService } from 'src/app/services/form-validations.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public cats:Category[] = [];
  public categoryForm!:Category;

  constructor(
    private _catService:CategoriesService,
    private _valService:FormValidationsService
  ) { 
    this.categoryForm = this._catService.initCategory();
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


  validateForm(){
    const name = this._valService.onlyLetters(this.categoryForm.detail,"catname");
    const slug = this._valService.onlyLetters(this.categoryForm.slug,"slugname");

    if(name.success && slug.success){
      return true;
    }else{
      alert(name.message+slug.message);
      return false;
    }
    
  }

  saveCategory(){
    if(this.validateForm()){
      this._catService.addCategory(this.categoryForm).subscribe(res=>{
        if(res.success){
          this.reloadInfo();
          
        }else{
          alert(res.message);
          
        }
      });
    }
  }

  deleteCat(id:number){
    this._catService.deleteCategoryById(id).subscribe(res=>{
      if(res.success){
        this.reloadInfo();
      }
      alert(res.message);
    });
  }

  reloadInfo(){

    this.cats = [];
    this.loadCurrentCategories();
    this.categoryForm = this._catService.initCategory();
  }

}
