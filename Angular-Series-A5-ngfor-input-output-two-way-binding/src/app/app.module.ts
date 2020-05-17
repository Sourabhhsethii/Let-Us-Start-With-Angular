import { SharedServiceService } from './shared-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFormComponentComponent } from './sample-form-component/sample-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide : 'sharedservices', useClass: SharedServiceService},
  {provide: 'sharevalue', useValue : 'Shared text!'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
