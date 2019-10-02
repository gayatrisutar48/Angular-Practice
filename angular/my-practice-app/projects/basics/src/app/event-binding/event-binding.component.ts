import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

public greeting=""


  constructor() { }

  ngOnInit() {
  }

  onclick(event){
    
    this.greeting="Welcome to codekul"
    console.log(event)
  }

  clickme(event){
    alert("button is clicked")
    console.log(event)
  }

}


