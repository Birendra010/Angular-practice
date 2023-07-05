import { Component } from '@angular/core';
import { favoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-practice';

  post ={
    title :'Title',
    isFavorite:true
  }

  onFavoriteChanged(eventArgs:favoriteChangedEventArgs){
    console.log("FavoriteChanged",eventArgs)
  }
}
