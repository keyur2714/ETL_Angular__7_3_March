import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistration;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm():void{
    this.userRegistration = this.formBuilder.group(
      {
        userName : this.formBuilder.control('',Validators.required),
        password : this.formBuilder.control('',[Validators.required,Validators.minLength(6)]),
        name : this.formBuilder.control('',Validators.required),
        email : this.formBuilder.control('',[Validators.required,Validators.email]),
        mobileNo : this.formBuilder.control('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
        userRole : this.formBuilder.control('admin'),
        hobbies : this.formBuilder.array([this.formBuilder.control('')])                
      }
    );
    // this.userRegistration = new FormGroup({
    //   userName : new FormControl('',Validators.required),
    //   password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    //   name : new FormControl('',Validators.required),
    //   email : new FormControl('',[Validators.required,Validators.email]),
    //   mobileNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
    //   userRole : new FormControl('admin'),
    //   hobbies : new FormArray([new FormControl()])
    // })
  }  

  addNewHobby():void{
    let newHobbyControl = this.formBuilder.control('');
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
