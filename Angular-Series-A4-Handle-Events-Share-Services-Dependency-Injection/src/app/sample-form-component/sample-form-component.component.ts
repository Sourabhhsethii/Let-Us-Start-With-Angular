import { SharedServiceService } from './../shared-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-form-component',
  template: `

  <ul>
    <li *ngFor=" let objectinArray of sharedServiceService.messageObject" >
    {{objectinArray}}
    </li>
  </ul>

  <div>
    <input #textInput type="text">
    <button (mouseout) = "mouseOutEvent($event)" (click)="onClick($event,textInput.value);"> Click Event</button>
  </div>

  <div>Value : {{textInputClicked}}</div>
  <div>Click Event : {{clickevent}}<div>
  <div>Mouse Out Event Check : {{mouseOutEventCheck}}<div>
 `,
 styles: [
 ]
})
export class SampleFormComponentComponent implements OnInit {

  constructor(public sharedServiceService: SharedServiceService){

  }
  textInputClicked = '';
  clickevent = '';
  mouseOutEventCheck = '';
  ngOnInit(): void {
  }

  onClick(event, textInput){
    console.log('Click Event :-' + textInput);
    this.textInputClicked =  textInput;
    this.clickevent = JSON.stringify(event );
  }

  mouseOutEvent(event){
    console.log('mouseOutEvent :-' + JSON.stringify(event));
    this.mouseOutEventCheck = JSON.stringify(event );
  }

}
