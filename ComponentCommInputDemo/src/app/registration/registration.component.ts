import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  countryList = [
    {
      id: 1,
      code: 'US',
      desc: 'United States'
    },
    {
      id: 2,
      code: 'UK',
      desc: 'United Kingdom'
    },
    {
      id: 3,
      code: 'IND',
      desc: 'India'
    }
  ];

  stateList = [
    {
      id: 10,
      code: 'MH',
      desc: 'Maharashtra'
    },
    {
      id: 20,
      code: 'GJ',
      desc: 'Gujrat'
    },
    {
      id: 30,
      code: 'RJ',
      desc: 'Rajashthan'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
