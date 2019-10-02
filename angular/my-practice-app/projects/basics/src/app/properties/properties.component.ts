import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  public myid = "testid"
  public name = "codekul"

  constructor() { }

  ngOnInit() {
  }

  pressme(value) {

    console.log(value)

  }


}
