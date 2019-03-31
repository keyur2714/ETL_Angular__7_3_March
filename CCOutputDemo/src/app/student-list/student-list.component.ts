import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  headerList : string[] = ["Name","Grade"];
  columnList : string[] = ["name","grade"];
  selectedStudent : Student = new Student();
  studentList: Student[] = [
    {
      rollNo: 27,
      name: 'keyur',
      grade: 'A'
    }
  ];

  constructor() { }

  ngOnInit() {
    let student2 = new Student();
    student2.rollNo = 26;
    student2.name = 'denish';
    student2.grade = 'B';

    let student3 = new Student();
    student3.rollNo = 44;
    student3.name = 'vinit';
    student3.grade = 'A+';

    this.studentList.push(student2);
    this.studentList.push(student3);

  }

  getRow(student:Student):void{
    this.selectedStudent = student;
  }
}
