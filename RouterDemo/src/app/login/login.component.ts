import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage : string  = '';
  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
  }

  login(frm : NgForm) : void{
    let userName = frm.controls['userName'].value;
    let password = frm.controls['password'].value;
    this.authenticationService.authenticate(userName,password).subscribe(
      (status)=>{
        if(status){
          this.router.navigate([this.authenticationService.getSuccessUrl()]);
        }else {
          this.errorMessage = 'Invalid Username or password';
        }
      }
    )
  }
}
