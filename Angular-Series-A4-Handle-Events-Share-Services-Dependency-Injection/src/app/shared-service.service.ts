import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedServiceService {

  message =  'You just shared services!!! :)';
  messageObject = [
    'Hello Sourabh, We are doing POC',
    'Let\'s have another POC on Dependency Injection in Angular',
    'It will be easy to learn after this article where we dicuss DI in details'
  ];

  constructor() { }
}
