import { Component, OnInit, Output, Input } from '@angular/core';
import { cntyInfo } from '../cntyinfo';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input()
  country: cntyInfo
  
  constructor() { }

  ngOnInit() {
  }

}
