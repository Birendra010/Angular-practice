import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService  {
 

  constructor(private http:HttpClient,  ) { }
  url:string ='https://api.github.com/users/birendra8757/followers'
getAll(){
 return  this.http.get(this.url)}

}
