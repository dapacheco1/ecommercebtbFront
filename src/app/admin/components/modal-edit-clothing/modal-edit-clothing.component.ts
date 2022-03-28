import { Component, OnInit,Input } from '@angular/core';
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
  selector: 'app-modal-edit-clothing',
  templateUrl: './modal-edit-clothing.component.html',
  styleUrls: ['./modal-edit-clothing.component.scss']
})
export class ModalEditClothingComponent implements OnInit {

  @Input() public clothe:Clothing = this._cltServices.initClothing();
  @Input() modalId:string = '';
  public filteredSz:Size[] = [];
  public sz!:Size[];
  public cats!:Category[];
  public genders!:Gender[];

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
    
    console.log(this.clothe);
    if(this.validateForm()){
      
      this._cltServices.updateClothe(this.clothe).subscribe(res=>{
        if(res.success){
          alert(res.message);
          
          this.resetForm();
        }else{
          alert(res.message);
        }
      });
      
      
    }else{
      alert('Please fill all the inputs');
      
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

    console.log(price,stock,name,details);
    
    if(price.success && stock.success && name.success && details.success && this.clothe.size_id != 0 && this.clothe.genre_id != 0 && this.clothe.category_id!=0){
      return true;
    }else{
      return false;
    }
  }


  getStatus(event:any){
    this.clothe.status = event.target.value;
  } 
}
