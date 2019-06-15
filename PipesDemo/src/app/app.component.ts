import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';
  name : string = 'keyur';

  today : Date = new Date();

  numObservable = interval(1000);
  //num = 0;

  department = {
    deptId : 10,
    deptName : 'IT'
  };

  mobileNo : string = '7387029671';

  grade : string = 'DIST';

  ngOnInit(){
    // this.numObservable.subscribe(
    //   (num)=>{
    //     this.num = num;
    //   }
    // );
  }
}
