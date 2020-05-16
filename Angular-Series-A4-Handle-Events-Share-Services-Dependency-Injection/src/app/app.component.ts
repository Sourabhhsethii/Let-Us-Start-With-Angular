import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Series-A4-Handle-Events-Share-Services-Dependency-Injection';
  constructor(private sharedService: SharedServiceService){

  }
}
