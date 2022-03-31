import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/interfaces/Gender';
import { Person } from 'src/app/interfaces/Person';
import { User } from 'src/app/interfaces/User';
import { FormValidationsService } from 'src/app/services/form-validations.service';
import { GenderService } from 'src/app/services/gender.service';
import { PersonServicesService } from 'src/app/services/person-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user!:User;
  public person!:Person;
  public genders!:Gender[];
  public gen!:Gender;
  public msgDataPerson:string = '';
  public msgDataUser:string = '';
  public msgStatus:boolean = true;

  constructor(
    private _usrServices:UserServicesService,
    private _prsServices:PersonServicesService,
    private _gnServices:GenderService,
    private _frmServices:FormValidationsService) { }

  ngOnInit(): void {
    this.user = this._usrServices.initUser();
    this.person = this._prsServices.initPerson();
    this.genders = this._gnServices.obtainCurrentGenders();
    this.gen = this._gnServices.initGender();
  }


  registerUser(){
    
    if(this.validateDataInputs()){

      this.user = this._usrServices.buildUserBeforeRegister(this.user,this.person,this.gen);

      this._usrServices.registerUser().subscribe(res=>{
        alert(res.message);
        if(res.success){
          this.clearForm();
        }
      });
    }

  }

  getGenderValue(event:any){
    this.person.genre_id = event.target.value;
    this.gen.id = event.target.value;
  }

  validateDataInputs(){
    this.msgDataPerson = '';
    this.msgDataUser = '';
    this.msgStatus = true;



    const name = this._frmServices.onlyLetters(this.person.names,"Name");
    const lastname = this._frmServices.onlyLetters(this.person.lastnames,"Lastname");
    const ci = this._frmServices.onlyNumbers(this.person.identifierDocument,"Identifier document");
    const usrname = this._frmServices.onlyLettersAndNumbers(this.user.username,"username");


    const pass = this._frmServices.validatePassword(this.user.password);

    const email = this._frmServices.validateEmail(this.user.email);
    
    
    if(name.success && this.person.names.length>=3 && lastname.success && this.person.lastnames.length>=3 && ci.success && usrname.success && pass.success && email.success && this.person.genre_id!=0 && this.person.identifierDocument.length==10){
      return true;
    }else{
      if(!name.success){
        if(this.person.names == ''){
          this.msgDataPerson+=` *Name is required`;
        }else{
          this.msgDataPerson+=` *${name.message}`;
        }
        
      }

      if(this.person.names.length<3 && this.person.names!=''){
        this.msgDataPerson+=" *Invalid name";
      }

      

      if(!lastname.success){
        if(this.person.lastnames == ''){
          this.msgDataPerson+=` *Lastname is required`;
        }else{
          this.msgDataPerson+=` *${lastname.message}`;
        }
        
      }

      if(this.person.lastnames.length<3 && this.person.lastnames!=''){
        this.msgDataPerson+=" *Invalid lastname";
      }

      if(!ci.success){
        if(this.person.identifierDocument == ''){
          this.msgDataPerson+=" *Identifier document is required";
        }else{
          this.msgDataPerson+=` *${ci.message}`;
        }
        
      }

      if(this.person.identifierDocument.length!=10 && this.person.identifierDocument!=''){
        this.msgDataPerson+=" *Identifier document must be have a length of 10 digits";
      }

      if(this.person.genre_id==0){
        this.msgDataPerson+=` *Gender is required`;
      }

      if(!usrname.success){
        if(this.user.username==''){
          this.msgDataUser+=` *Username is required`;
        }else{
          this.msgDataUser+=` *${usrname.message}`;
        }
        
      }

      if(!pass.success){
        if(this.user.password==''){
          this.msgDataUser+=` *Password is required`;
        }else{
          this.msgDataUser+=` *${pass.message}`;
        }

        
      }

      if(!email.success){
        if(this.user.email==''){
          this.msgDataUser+=` *Email is required`;
        }else{
          this.msgDataUser+=` *${email.message}`;
        }
        
      }
      this.msgStatus = false;
      return false;
    }


  }

  clearForm(){
    this.ngOnInit();
  }



}
