import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent {
form = new FormGroup({
  topics: new FormArray([])
})

addTopic(topic:HTMLInputElement){
  this.topics.push(new FormControl(topic.value))
  topic.value =""
}
removeTopic(i:number){
  this.topics.controls.splice(i,1)
 
}

get topics(){
  return this.form.get('topics') as FormArray;
}




}
