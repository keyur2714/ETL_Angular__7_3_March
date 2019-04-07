import { Component, ElementRef, ViewChild } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild("heading")
  heading: ElementRef;

  @ViewChild("str")
  str : ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent: StringUtilComponent;
  
  changeHeading():void{
    console.log(this.heading);
    console.log(this.heading.nativeElement);
    console.log(this.heading.nativeElement.innerHTML);
    this.heading.nativeElement.innerHTML = 'View Child Demo';
    this.heading.nativeElement.style.color = 'red';
  }

  revStr():void{
    this.str.nativeElement.value = this.stringUtilComponent.revStr(this.str.nativeElement.value);
    this.str.nativeElement.style.background = 'yellow';
  }
}
