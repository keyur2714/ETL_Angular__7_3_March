import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistration : FormGroup;

  constructor() { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm():void{
    this.userRegistration = new FormGroup({
      userName : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      mobileNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      userRole : new FormControl(),
      hobbies : new FormArray([new FormControl()])
    })
  }  

  addNewHobby():void{
    let newHobbyControl = new FormControl();
    (<FormArray>this.userRegistration.get('hobbies')).push(newHobbyControl);
  }

  save():void{
    console.log(this.userRegistration);
    console.log(this.userRegistration.value);
  }

  reset():void{
    this.userRegistration.reset();
  }
}
