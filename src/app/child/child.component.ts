import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Output() child=new EventEmitter();
  value="";
  constructor() { }

  ngOnInit() {
  }
  onClick(value)
  {
    this.value=value;
    this.child.emit(value);
  }


}
