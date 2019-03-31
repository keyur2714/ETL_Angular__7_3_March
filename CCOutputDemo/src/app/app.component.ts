import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCOutputDemo';
  formattedMSg : string = '';
  getMessage(msg):void{
    console.log(2);
    console.log(msg);
    this.formattedMSg = msg;
  }
}
