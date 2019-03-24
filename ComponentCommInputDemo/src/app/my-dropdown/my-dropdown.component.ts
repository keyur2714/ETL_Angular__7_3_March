import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  
  @Input()
  name:string = '';

  @Input()
  dataList: any[] = [];

  @Input()
  selectedValue: any = '-1';

  constructor() { }

  ngOnInit() {
  }

}
