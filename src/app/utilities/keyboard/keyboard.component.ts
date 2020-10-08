import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Output() event  = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit(): void {
  }  

  keyEvent(value:string){ 
    this.event.emit(value);
  }
}
 