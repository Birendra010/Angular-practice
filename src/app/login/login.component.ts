import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
// import { from } from 'rxjs';
// import { passwordMatch } from '../reactive-form/password.validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private userService:UserService){}

userLogin(data:any){
  console.log(data)
  this.userService.login(data)
}

logout(_isLoggedIn:true){
  this.userService.logout()

}


form = {
  username:'',
  password:'',

}


}
