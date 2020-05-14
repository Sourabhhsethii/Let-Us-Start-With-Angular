import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit,
   AfterContentChecked, AfterViewChecked, OnDestroy, Input } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'Angular-Series-A1-Lets-start-with-angular';

  constructorCalled: string;
  ngOnChangesCalled: string;
  ngOnInitCalled: string;
  ngDoCheckCalled: string;
  ngAfterContentInitCalled: string;
  ngAfterContentCheckedCalled: string;
  ngAfterViewInitCalled: string;
  thisngAfterViewCheckedCalled: string;
  ngOnDestroyCalled: string;

  /**
   * The Constructor is a default method of the class that
   * is executed when the class is instantiated and ensures
   * proper initialisation of fields in the class and its subclasses.
   *  Angular, or better Dependency Injector (DI), analyses the constructor
   *  parameters and when it creates a new instance by calling new MyClass()
   *  it tries to find providers that match the types of the constructor parameters
   */
  constructor() {
    this.constructorCalled = 'Constructor Called';
    console.log('The Constructor is a default method of the class that' +
    'is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses.');
  }

  /**
   * Respond when Angular sets or resets data-bound input properties.
   * The method receives a SimpleChanges object of current and previous property values.
   * Note that this happens very frequently, so any operation you perform here impacts performance
   * significantly
   */
  ngOnChanges() {
    this.ngOnChangesCalled = 'OnChanges Called ';
    console.log('ngOnChanges Called' ); }

  /**
   * ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
   * We have to import OnInit like this in order to use it (actually implementing OnInit is not mandatory
   */
  ngOnInit(){
    this.ngOnInitCalled = 'OnInit Called -> ngOnInit Called : ngOnInit is a life cycle hook called by Angular' +
    'to indicate that Angular is done creating the component. ';
    console.log('ngOnInit Called : ngOnInit is a life cycle hook called by Angular' +
     'to indicate that Angular is done creating the component.');
  }

  ngDoCheck(){
    this.ngDoCheckCalled = 'ngDoCheck Called : ngDoCheck Called " Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.';
    console.log('ngDoCheck Called " Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.');
  }
  ngAfterContentInit(){
    this.ngAfterContentInitCalled = 'ngAfterContentInit Called -> Called once after the first ngDoCheck()';
    console.log('ngAfterContentInit Called -> Called once after the first ngDoCheck()');
  }

  ngAfterContentChecked(){
    this.ngAfterContentCheckedCalled = 'ngAfterContentChecked called -> Called after ngAfterContentInit() and every subsequent ngDoCheck()';
    console.log('AfterContentChecked Called -> Called after ngAfterContentInit() and every subsequent ngDoCheck()');
  }

  ngAfterViewInit(){
    this.ngAfterViewInitCalled = 'ngAfterViewInit called ->  Called once after the first ngAfterContentChecked().';
    console.log('ngAfterViewInit Called -> Called once after the first ngAfterContentChecked().');
  }
  ngAfterViewChecked(){
    this.thisngAfterViewCheckedCalled = 'ngAfterViewChecked called -> Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().';
    console.log('ngAfterViewChecked Called -> Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().');
  }

  ngOnDestroy(){
    this.ngOnDestroyCalled = 'ngOnDestroy called -> Called immediately before Angular destroys the directive or component.';
    console.log('ngOnDestroy Called -> Called immediately before Angular destroys the directive or component.');
  }

}
