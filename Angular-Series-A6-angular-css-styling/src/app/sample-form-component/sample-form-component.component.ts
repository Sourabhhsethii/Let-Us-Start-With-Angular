import { Component, OnInit, Inject, Input, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-sample-form-component',
  template: `
  <input #myIput type="text" [(ngModel)] = "message">
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

  button{
    border: none;
  }
  `
  ]
})
export class SampleFormComponentComponent implements OnInit {
  @Input() message = '';
  @Output() update = new EventEmitter();

  constructor(
  @Inject('sharedservices') public sharedservices,
  @Inject('sharevalue') public sharevalue) { }

  ngOnInit(): void {
  }

}
