import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  name: string = 'Keyur';
  city: string = 'Pune';
  mobileNo: string = '7387029671';
  age: number = 32;

  constructor() { }

  ngOnInit() {
  }

}
