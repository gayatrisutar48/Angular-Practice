import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calsi-comp',
  templateUrl: './calsi-comp.component.html',
  styleUrls: ['./calsi-comp.component.css']
})
export class CalsiCompComponent implements OnInit {

  public num1
  public num2
  public result
  constructor() { }

  ngOnInit() {
  }

  addition() {
    this.result = this.num1 + this.num2
  }
  subtraction() {
    this.result = this.num1 - this.num2
  }
  multiplication() {
    this.result = this.num1 * this.num2
  }
  division() {
    this.result = this.num1 / this.num2
  }
}
