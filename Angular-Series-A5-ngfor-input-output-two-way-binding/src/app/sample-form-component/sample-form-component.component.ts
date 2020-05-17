import { Component, OnInit, Inject, Input, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-sample-form-component',
  template: `
    <p style="color: red">
    {{sharedservices.message}}
    </p>
  <div style="color: green">{{sharevalue}}</div>
  <div style="color: blue">{{message}}</div>
  <input #myIput type="text" [(ngModel)] = "message">
  <button (click)="update.emit({text:message})"> click Me!</button>
  `,
  styles: [
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
