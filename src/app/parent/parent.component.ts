import { Component, OnInit,AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // ngAfterViewInit() {
  //   this.message=this.child.message;
  // }

  constructor() { }
  // @ViewChild(ChildComponent,{static:false}) child;
  // message:string;
  // public message1="Hello fine";
  // receiveMessage($event: string)
  // {
  //   this.message=$event;
  // }
  public message1;
  @Output() parentEvent=new EventEmitter();
  sendMessage(message)
  {
    this.message1=message.toString();
    this.parentEvent.emit(this.message1)
  }

  ngOnInit() {
  }

}
