import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './uaername.validation';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
form =new FormGroup({
  username:new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace
  ]),
  password :new FormControl('',Validators.required)
})
get username(){
  return this.form.get('username')
}
}

