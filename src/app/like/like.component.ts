import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {


  @Input('likesCount')
  likesCount!: number;
  @Input('isActive')
  isActive!: boolean;
tweet: any;


onClick(){
  this.likesCount = this.isActive ? 0 : 1;
  this.isActive =!this.isActive; 
}

}
