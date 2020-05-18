import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
messageObject = [
  { id: 0, text: 'Let\'s Show Some text'},
  { id: 1, text: 'How are you?'},
  { id: 2, text: 'I am fine.'}
];

update(id, text){
  this.messageObject =  this.messageObject.map( m =>
    m.id === id
    ? {id, text}
    : m
    );

}

  constructor() { }
}
