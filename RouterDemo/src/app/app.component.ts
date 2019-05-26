import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouterDemo';
  isLoggedIn : boolean = false;
  constructor(private authenticationService : AuthenticationService){    
    this.isLoggedIn = this.authenticationService.getIsLoggedIn();
  }

  checkAuth():void{
    this.isLoggedIn = this.authenticationService.getIsLoggedIn();
  }
}
