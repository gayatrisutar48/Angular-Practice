import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public name = "codekul"
  public propbind = "text-danger"
  public isvisible = true
  public haserror = true
  
  public msg={
    "text-success": !this.haserror,
    "text-danger": this.haserror,
    "text-special":this.isvisible
  }

  constructor() { }

  ngOnInit() {
  }

}
