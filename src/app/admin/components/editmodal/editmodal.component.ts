import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormValidationsService } from 'src/app/services/form-validations.service';
@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {

  @Input() public cat:Category = this._catService.initCategory();
  public msg:string = '';
  public formStatus:boolean = true;

  constructor(
    private _catService:CategoriesService,
    private _valService:FormValidationsService
  ) {}

  ngOnInit(): void {

  }

  updateCategory(){
    if(this.validateForm()){
      this._catService.updateCategory(this.cat).subscribe(res=>{
        alert(res.message);
      });
    }

  }

  changeStatus(ct:any){
    this.cat.status = ct.target.value;
  }


  validateForm(){
    this.msg = '';
    const name = this._valService.onlyLetters(this.cat.detail,"catname");
    const slug = this._valService.onlyLetters(this.cat.slug,"slugname");

    if(name.success && slug.success){
      this.formStatus = true;
      return true;
    }else{
      this.formStatus = false;
      if(!name.success){
        this.msg += name.message;
      }

      if(!slug.success){
        this.msg += '->'+slug.message
      }
      return false;
    }

  }


}
