import { Component, OnInit, Input } from '@angular/core';
import { cntyInfo } from '../cntyinfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  country: cntyInfo

  constructor() { }

  ngOnInit() {
  }

}
