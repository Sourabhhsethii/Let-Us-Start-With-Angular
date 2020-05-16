import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFormComponentComponent } from './sample-form-component/sample-form-component.component';
import { SharedServiceService } from './shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
