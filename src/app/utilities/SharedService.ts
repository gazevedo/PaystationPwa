import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private eventMsg = new BehaviorSubject('');
  private eventLoadder = new BehaviorSubject('');

  sharedMessage = this.eventMsg.asObservable();
  sharedLoadder = this.eventLoadder.asObservable();

  constructor() { }

  nextMessage(message: string) {  
    this.eventMsg.next(message)
  }

  showLoadder(message: string) {   
    this.eventLoadder.next(message)
  }
  
}