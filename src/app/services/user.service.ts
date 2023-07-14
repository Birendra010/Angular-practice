import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router){ }

  login(data:any){
    this.http.post("https://dummyjson.com/auth/login",data).subscribe((result:any)=>{
      localStorage.setItem("token",result.token);
      this.router.navigate(['/http-post'])
    })
  } 

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // getAuthorizationToken() {
  //   const currentUser = localStorage.getItem('currentUser'),
  //   return currentUser.token;
  // }

  logout() {
   return localStorage.removeItem('currentUser');
  }


}
