import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('slideAnimation',[
      transition(':enter',[
        style({offset:.8,opacity:0, transform:"scale(.5)",easing:"ease-out"}),
        style({offset:1,opacity:0,easing:"ease-out"}),
        animate(500)
      ])
    ])
  ]
 
})
export class HomeComponent {

}
