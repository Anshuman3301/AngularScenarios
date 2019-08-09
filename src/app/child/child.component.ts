import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // public message="Hello Mites";
  @Output() MessageEvent=new EventEmitter<string>();
  sendMessage(message)
  {
    this.MessageEvent.emit(message);
  }
  
  ngOnInit() {
  }

}
