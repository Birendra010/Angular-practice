import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from './password.validation';
// import { UsernameValidators } from './uaername.validation';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  integerRegex=/^\d+$/
  emailRegex =/^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/


  registerForm = new FormGroup ({
    fname : new FormControl("",[Validators.required,Validators.maxLength(32),Validators.minLength(3)]),
    lname : new FormControl("",[Validators.required,Validators.maxLength(15)]),
    username : new FormControl("",[Validators.required,Validators.maxLength(25)]),


    mobile : new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.integerRegex)]),
    email: new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
    password: new FormControl("",[Validators.required ,Validators.maxLength(32),Validators.minLength(8)]) ,
    confirm_password: new FormControl("",[Validators.required, Validators.maxLength(32),Validators.minLength(8)]) ,

  },[passwordMatch("password","confirm_password")])




  getControl(name:any):AbstractControl |null{
    return this.registerForm.get(name)
  }


registerFn(){
  console.log(this.registerForm.value)
}





}