import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {
  private regexTxt = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]+$/u;
  private regexDir = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð0-9 '-]+$/u;
  private regexNum = /^\d+$/;
  private regexUser = /^[A-Za-z0-9]+$/;
  private regexPass = /^[A-Za-z0-9-@.,]+$/;
  private regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor() { }

  private buildResponse(value:boolean,message:string){
    let res:any =[];
    return res = {
      "success":value,
      "message":message,
    }
  }

  onlyLetters(str:string,inputName:string){
    if(this.regexTxt.test(this.trimData(str))){
      return this.buildResponse(true,`This input(${inputName}) fulfill with condition only letters and special letters`);
    }else{
      return this.buildResponse(false,`This input(${inputName}) only admit letters and special letters`);
    }
  }

  onlyLettersSpecialLettersAndNumbers(str:string,inputName:string){
    if(this.regexDir.test(str)){
      return this.buildResponse(true,`This input(${inputName}) fulfill with condition only letters, special letters and numbers`);
    }else{
      return this.buildResponse(false,`This input(${inputName}) only admit letters, special letters and numbers`);
    }

  }

  onlyNumbers(str:string,inputName:string){
    if(this.regexNum.test(str)){
      return this.buildResponse(true,`This input(${inputName}) fulfill with the condition only numbers`);
    }else{
      return this.buildResponse(false,`This input(${inputName}) only admit numbers`);
    }

  }

  onlyLettersAndNumbers(str:string,inputName:string){

    if(this.regexUser.test(this.trimData(str))){
      return this.buildResponse(true,`This input(${inputName}) fulfill only letters and numbers`);
    }else{
      return this.buildResponse(false,`This input(${inputName}) admit only letters and numbers`);
    }

  }

  validatePassword(str:string){

    if(this.regexPass.test(this.trimData(str)) && str.length>=8){
      return this.buildResponse(true,"This password is admited");
    }else{
      return this.buildResponse(false,"This password only admit letters,numbers,-,. and colon and a length of 8 characters");
    }

  }

  validateEmail(str:string){
    if(this.regexEmail.test(this.trimData(str))){
      return this.buildResponse(true,"This email is valid");
    }else{
      return this.buildResponse(false,"This email is not valid");
    }

  }


  //function to trim blank spaces
  private trimData(word:string){
    const char = /^\s+|\s+$/gm;
    return word.replace(char,'');
  }
}
