import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyStyleDirective } from './my-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DirectiveDemo';
  fontSize : string = '10px';

  @ViewChild("m1")
  m1 : ElementRef;

  @ViewChild("m2")
  m2 : ElementRef;

  noOfElement : number= 7;

  @ViewChild(MyStyleDirective)
  appMyStyle : MyStyleDirective;

  constructor(){
    console.log("App Component Object created...!");
  }



  ngOnInit(){
    console.log("App Component Initialized...!");    
    console.log(this.m1.nativeElement);
    console.log(this.m2.nativeElement);
  }

  changeStyle(){
    this.appMyStyle.changeStyle('green','40px',this.m1);
    this.appMyStyle.changeStyle('blue','10px',this.m2);
  }
}
