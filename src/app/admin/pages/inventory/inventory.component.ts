import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Gender } from 'src/app/interfaces/Gender';
import { Size } from 'src/app/interfaces/Size';
import { CategoriesService } from 'src/app/services/categories.service';
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
  public imgURL:string = "";

  constructor(
    private _catServices:CategoriesService,
    private _sizeServices:SizeService,
    private _genderServices:GenderService
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

  }
}
