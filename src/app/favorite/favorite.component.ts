import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
 
  
})
export class FavoriteComponent {
 
  // data:string="birendra";

  @Input('isFavorite')isSelected:boolean=false
  @Output() change = new EventEmitter() 
isFavorite: any;

onClick(){
  this.isSelected=!this.isSelected
  this.change.emit({newValue:this.isSelected})
}



}
export interface favoriteChangedEventArgs{
  newValue :boolean
}
