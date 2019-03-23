import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  menuItems : any[] = [];

  @Input('color')
  bgColor : string = 'warning';
  constructor() { }

  ngOnInit() {
  }

}
