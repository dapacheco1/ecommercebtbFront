import { Component, Input, OnInit } from '@angular/core';

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
  public formStatus:boolean= true;
  public auxCat:Category = this._catService.initCategory();

  public msg:string = '';
  public msgModal:string = `Are you sure that you want to delete this category?
  this action cannot be undone after this.`;
  public InId:number  = 0;

  constructor(
    private _catService:CategoriesService,
    private _valService:FormValidationsService
  ) {
    this.categoryForm = this._catService.initCategory();
    this.categoryForm.status = 'I';
  }

  ngOnInit(): void {
    this.loadCurrentCategories();
  }


  loadCurrentCategories(){
    this._catService.getCategories().subscribe(res=>{
      if(res.success){
        res.data.forEach((item:Category) => {
          item.created_at = item.created_at.split('T')[0];
          item.updated_at = item.updated_at.split('T')[0];
          this.cats.push(item);
        });

      }else{
        alert(res.message);
      }
    });
  }


  validateForm(){
    this.msg = '';
    const name = this._valService.onlyLetters(this.categoryForm.detail,"catname");
    const slug = this._valService.onlyLetters(this.categoryForm.slug,"slugname");

    if(name.success && slug.success && this.categoryForm.detail.length>=3 && this.categoryForm.slug.length>=3){
      this.formStatus = true;
      return true;
    }else{
      this.formStatus = false;
      if(!name.success){
        if(this.categoryForm.detail==''){
          this.msg += ` *Category name is required`;
        }else{
          this.msg += ` *${name.message}`;
        }
        
      }

      if(this.categoryForm.detail.length<3 && this.categoryForm.detail!=''){
        this.msg += ` *Invalid category name`;
      }

      if(this.categoryForm.slug.length<3 && this.categoryForm.slug!=''){
        this.msg += ` *Invalid slug name`;
      }

      if(!slug.success){
        if(this.categoryForm.slug==''){
          this.msg += ` *Slug name is required`;
        }else{
          this.msg += ` *${slug.message}`;
        }
        
      }
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

  reloadInfo(){

    this.cats = [];
    this.loadCurrentCategories();
    this.categoryForm = this._catService.initCategory();
  }

  isDeleted(event:any){
    if(event == 'deleted'){
      this.reloadInfo();
    }
  }

  assignId(id:number){
    this.InId = id;
  }


  loadCategoryOnModal(category:Category){
    this.auxCat = category;
  }

}
