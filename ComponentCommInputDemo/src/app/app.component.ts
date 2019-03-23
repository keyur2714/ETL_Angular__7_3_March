import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Demo';
  msg : string = 'Hello Radhe Krishna...!';

  menuItems = [
    {
      label: 'Home',
      link: '#'
    },
    {
      label: 'About Us',
      link: '#'
    },
    {
      label: 'Contact Us',
      link: '#'
    }
  ];
}
