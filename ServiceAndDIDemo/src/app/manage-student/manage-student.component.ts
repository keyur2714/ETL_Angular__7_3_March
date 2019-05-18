import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { ManageStudentService } from './manage-student.service';
import { Student } from './student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css'],
  providers : [ManageStudentService]
})
export class ManageStudentComponent implements OnInit {

  newStudent : Student = new Student();
  message : string = '';
  isUpdate : boolean = false;

  studentList : Student[] = [];

  constructor(private loggingService : LoggingService,private manageStudentService : ManageStudentService) { 
    this.loggingService.logInfo("Manage Student Component Object Created...! ");
  }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList(): void{
    this.manageStudentService.getStudentList().subscribe(
      (data : Student[])=>{
        this.studentList = data;
      },
      (error)=>{

      }
    )
  }

  save(frm : NgForm) : void {
    if(frm.valid){
      this.manageStudentService.saveStudent(this.newStudent).subscribe(
        (data : Student)=>{
          this.message = 'Student Details Saved Successfully.';
          this.getStudentList();
        },  
        (error)=>{

        }
      )      
    }
  }

  update() : void {
      this.manageStudentService.updateStudent(this.newStudent).subscribe(
        (data : Student)=>{
          this.message = 'Student Details Updated Successfully.';
          this.getStudentList();
        },  
        (error)=>{

        }
      )          
  }

  delete(id : number) : void {
    let confirmMsg = confirm("Are you sure want to delete?");
    if(confirmMsg){
      this.manageStudentService.deleteStudentById(id).subscribe(
        (data : number)=>{
          this.message = "Student Deleted Successfully.";
          this.getStudentList();
        }
      )
    }
  }

  edit(id : number) : void {
    this.manageStudentService.getStudentById(id).subscribe(
      (data : Student) => {
        this.newStudent = data;
        this.isUpdate = true;
      }
    ) 
  }
}
