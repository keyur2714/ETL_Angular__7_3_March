import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Item } from '../item.model';

@Component({
  selector: 'app-items-entry',
  templateUrl: './items-entry.component.html',
  styleUrls: ['./items-entry.component.css']
})
export class ItemsEntryComponent implements OnInit {

  isSubmited : boolean = false;

  newItem : Item = new Item();

  categoryList : Category[]= [
    {
      id: 1,
      code: "ST",
      desc: "Starter"
    },
    {
      id: 2,
      code: "MC",
      desc: "Main Course"
    },
    {
      id: 3,
      code: "DS",
      desc: "Desserts"
    }
  ];  

  constructor() { }

  ngOnInit() {
    this.newItem.category = this.categoryList[0];
  }

  save(frm):void{
    console.log(frm);
    if(frm.valid){
      this.isSubmited = true;
    }
  }
}
