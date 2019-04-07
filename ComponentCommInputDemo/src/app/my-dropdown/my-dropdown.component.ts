import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

  @Output()
  getSelectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedItem():void{
    this.getSelectedItem.emit(this.selectedValue);
  }
}
