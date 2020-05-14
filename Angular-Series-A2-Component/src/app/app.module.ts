import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleFormComponentComponent } from './sample-form-component/sample-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
