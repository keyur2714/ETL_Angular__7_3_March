import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input()
  headerNames: string[] = [];
  @Input()
  columnList: string[] = [];
  @Input()
  dataList: any[] = [];

  @Output()
  getSelectedRow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  setSelectedRow(data:any):void{
    this.getSelectedRow.emit(data);
  }  
}
