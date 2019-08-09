import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Input('parentData') Data;
  constructor() { }

  ngOnInit() {
  }

}
