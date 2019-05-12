import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map, reduce , tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';

  newNumber : number = 0; 
  
  

  numberObservable = interval(1000);

  

  nameObservable = of("keyur","denish","vinit","ravi","hiren");

  ngOnInit(){
    let promise = new Promise((resolve, reject) => {      
      this.nameObservable
        .toPromise()
        .then(
          res => { // Success
            console.log(res+" promise - ");
            resolve();
          }
        );
    });

    //  this.numberObservable.subscribe({
    //   next(response) { console.log(response); },
    //   error(err) { console.error('Error: ' + err); },
    //   complete() { console.log('Completed'); }
    //  }
    // ); 
    this.numberObservable.subscribe(
      (data:number)=>{
        this.newNumber = data;
      },
      (error)=>{

      }
    )

    this.nameObservable.subscribe(
      (name:string)=>{
        console.log(name);
      },
      (error)=>{

      },
      () => {
        console.log("Completed...");
      }
    )
    
    this.nameObservable.pipe(      
      filter(name => name.indexOf('i') > 0),
      map((name:string)=>{
        name = name.toUpperCase();
        return name;
      }),
      reduce((acc, val) => {
        console.log(acc+" ========== "+val);        
        acc = acc + " " + val;
        return acc;
      })
    ).subscribe(
      (noOfFilterNames)=>{
        console.log(noOfFilterNames+" Final");
      }
    )
    const source = of(1, 2, 3, 4, 5);
    const example = source
    .pipe(
      map(val => val + 20),
      tap({
       next: val => {
         // on next 11, etc.
         console.log('on next', val);
       },
       error: error => {
         console.log('on error', error.message);
       },
       complete: () => console.log('on complete')
      })
    )
    // output: 11, 12, 13, 14, 15
    .subscribe(val => console.log(val+" result"));
  }

}
