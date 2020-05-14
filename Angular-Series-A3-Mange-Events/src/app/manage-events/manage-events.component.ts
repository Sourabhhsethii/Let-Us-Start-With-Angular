import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-events',
  template: `
   <div>
<input #textInput type="text">
<button (click)="onClick(textInput.value);"> Click Event</button>

   </div>
  `,
  styles: [
  ]
})
export class ManageEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(textInput){
    console.log('Click Event :-' + textInput);
  }

}
