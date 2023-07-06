import { Component } from '@angular/core';
import { favoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'Angular-practice';

  role:string = "Users";

tweet ={
  body:'...',
  likesCount:10,
  isLiked:true
}


  post ={
    title :'Title',
    isFavorite:true
  }

  onFavoriteChanged(eventArgs:favoriteChangedEventArgs){
    console.log("FavoriteChanged",eventArgs)
  }

courses=[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'}
  
]
onAdd(){
  this.courses.push({id:4,name:"course4"})
}

onRemove(course: { id: number; name: string; }){
  let index =this.courses.indexOf(course);
  this.courses.splice(index,1);
}




loadCourses(){
  this.courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
]
}
trakCourse(course: { id: any; }){
  return course ? course.id:undefined
}

  
}
