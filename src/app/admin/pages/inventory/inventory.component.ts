import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Clothing } from 'src/app/interfaces/Clothing';
import { Gender } from 'src/app/interfaces/Gender';
import { Size } from 'src/app/interfaces/Size';
import { CategoriesService } from 'src/app/services/categories.service';
import { ClothingService } from 'src/app/services/clothing.service';
import { FormValidationsService } from 'src/app/services/form-validations.service';
import { GenderService } from 'src/app/services/gender.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public cats!:Category[];
  public sz!:Size[];
  public genders!:Gender[];
  public filteredSz:Size[] = [];
  public clothe!:Clothing;

  constructor(
    private _catServices:CategoriesService,
    private _sizeServices:SizeService,
    private _genderServices:GenderService,
    private _cltServices:ClothingService,
    private _form:FormValidationsService
  ) {
    
   }

  ngOnInit(): void {
    this.cats = [];
    this.sz = [];
    this.genders = [];
    this.clothe = this._cltServices.initClothing();
    this.loadCategories();
    this.loadSizes();
    this.loadGenders();
    
    
  }


  loadCategories(){
    this._catServices.getCategories().subscribe(res=>{
      if(res.success){
        this.cats = res.data;       
      }
    });
  }

  loadSizes(){
    this._sizeServices.getAllSizes().subscribe(res=>{
      if(res.success){
        this.sz = res.data;
      }
    });
  }

  loadGenders(){
    this.genders = this._genderServices.obtainCurrentGenders();
  }

  filterSizesByCatId(catId:any){
    this.filteredSz = [];
    this.filteredSz =  this.sz.filter((item:Size)=>item?.category?.slug == catId.target.value);

    this.clothe.category_id = this.filteredSz[0].category_id;
  }

  getSizeId(event:any){

    this.clothe.size_id = event.target.value;
  }

  getGenderId(event:any){
    this.clothe.genre_id = event.target.value;
    
  }

  saveClothe(){
    if(this.validateForm()){
      this._cltServices.createClothe(this.clothe).subscribe(res=>{
        if(res.success){
          this.resetForm();
        }else{
          alert(res.message);
        }
      });
    }
    
  }

  resetForm(){
    this.clothe = this._cltServices.initClothing();
    this.cats = [];
    this.sz = [];
    this.filteredSz = [];
    this.genders = [];
    this.loadCategories();
    this.loadSizes();
    this.loadGenders();
  }



  validateForm(){
    const price = this._form.onlyNumbers((String)(this.clothe.price),"price");
    const stock = this._form.onlyNumbers((String)(this.clothe.stock),"stock");
    const name = this._form.onlyLetters(this.clothe.name,"product name");
    const details = this._form.onlyLettersSpecialLettersAndNumbers(this.clothe.detail,"details");
    
    if(price.success && stock.success && name.success && details.success && this.clothe.size_id != 0 && this.clothe.genre_id != 0 && this.clothe.category_id!=0){
      return true;
    }else{
      return false;
    }
  }
}
