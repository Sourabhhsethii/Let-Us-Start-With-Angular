import { Component, OnInit, Inject, Input, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-sample-form-component',
  template: `
  <input #myIput type="text" [(ngModel)] = "message" [ngClass] = "{mouseclickedClass:ismouseclicked}"
  (click)="mouseclick()" (mouseleave)="ismouseclicked = false">
  <button (click)="update.emit({text:message})"> click Me!</button>
  `,
  styles: [ `
  :host{
    display : flex;
    flex-direction : column;
  }
  input:focus{
    font-weight: bold;
    outline: none;
  }

  .mouseclickedClass{
    border : 3px solid yellow;
  }

  button{
    border: none;
  }
  `
  ]
})
export class SampleFormComponentComponent implements OnInit {
  @Input() message = '';
  @Output() update = new EventEmitter();
  public ismouseclicked = false;

  constructor(
  @Inject('sharedservices') public sharedservices,
  @Inject('sharevalue') public sharevalue) { }

  ngOnInit(): void {
  }
  mouseclick(){
    this.ismouseclicked =  true;
  }

}
