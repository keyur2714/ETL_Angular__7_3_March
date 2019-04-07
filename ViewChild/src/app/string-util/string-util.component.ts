import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  template: ``  
})
export class StringUtilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  revStr(str:string):string{
    let revStr= str.split("").reverse().join("");
    return revStr;
  }

  convertToUpper(str:string):string{
    return str.toUpperCase();
  }

  convertToLower(str:string):string{
    return str.toLowerCase();
  }
}
