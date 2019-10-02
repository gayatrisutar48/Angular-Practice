import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  @Input() count = 0
  @Output() countchange = new EventEmitter<number>()


  public name = ""

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++
    this.countchange.emit(this.count)
  }
  decrement() {
    this.count--
    this.countchange.emit(this.count)
  }

}
