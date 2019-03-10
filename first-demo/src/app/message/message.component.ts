import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
  <p class="alert alert-primary">
      Good Morning...!
  </p>
  <button class="btn btn-danger">Say Hello</button>
  `,
  styles: ['']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
