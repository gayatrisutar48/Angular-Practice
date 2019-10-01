import { Component, OnInit } from '@angular/core';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-interpolations',
  templateUrl: './interpolations.component.html',
  styleUrls: ['./interpolations.component.css']
})
export class InterpolationsComponent implements OnInit {


  private msg:string ="Interpolation"
public siteurl=window.location.host


  constructor() { }

  ngOnInit() {
  }

  oneUsr(){
    return "hello "+ this.msg
  }

}
