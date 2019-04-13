import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input()
  text: string = 'Sachin';

  @Input()
  color : string = 'red';

  @Input()
  fontSize : string = '20px'; 

  constructor(private elementRef : ElementRef) { 
    console.log("Dirctive Object Created...!");
  }

  ngAfterViewInit(){
    console.log("After View Initialized...!");
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.color=this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.innerHTML = this.text;
  }

  changeStyle(color:string,fontSize:string,elementRef:ElementRef){
    this.elementRef = elementRef;
    this.elementRef.nativeElement.style.color=color;
    this.elementRef.nativeElement.style.fontSize = fontSize;
  }
}
