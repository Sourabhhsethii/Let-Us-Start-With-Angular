import { Component, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Series-A5-ngfor-input-output-two-way-binding';
  @Output() update = new EventEmitter();
  constructor(
    @Inject('sharedservices') public sharedservices){

  }
  onUpdate(id, text){
    this.sharedservices.update(id, text);
  }
}
