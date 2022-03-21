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

    if(name.success && lastname.success && ci.success && usrname.success && pass.success && email.success && this.gen.id!=0){
      return true;
    }else{
      if(!name.success){
        this.msgDataPerson+=`->${name.message}`;
      }

      if(!lastname.success){
        this.msgDataPerson+=`->${lastname.message}`;
      }

      if(!ci.success){
        this.msgDataPerson+=`->${ci.message}`;
      }

      if(this.person.genre_id==0){
        this.msgDataPerson+=`->Please select a gender`;
      }

      if(!usrname.success){
        this.msgDataUser+=`->${usrname.message}`;
      }

      if(!pass.success){
        this.msgDataUser+=`->${pass.message}`;
      }

      if(!email.success){
        this.msgDataUser+=`->${email.message}`;
      }
      this.msgStatus = false;
      return false;
    }


  }

  clearForm(){
    this.ngOnInit();
  }



}
