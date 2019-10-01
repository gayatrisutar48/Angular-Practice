import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

public myid="testid"
 name='gayatri'

  constructor() { }

  ngOnInit() {
  }

pressme(){
  this.name
}

}
