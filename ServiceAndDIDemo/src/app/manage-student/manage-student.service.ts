import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable()
export class ManageStudentService {

    appURL : string = 'http://localhost:3000/student';

    constructor(private httpClient : HttpClient){}   

    getStudentList():Observable<Student[]>{
        return this.httpClient.get<Student[]>(this.appURL);
    }


    getStudentById(id : number):Observable<Student>{
        return this.httpClient.get<Student>(this.appURL+"/"+id);
    }

    saveStudent(student : Student) : Observable<Student> {
        return this.httpClient.post<Student>(this.appURL,student);
    }

    updateStudent(student : Student) : Observable<Student> {
        return this.httpClient.put<Student>(this.appURL+"/"+student.id,student);
    }

    deleteStudentById(id : number) : Observable<number>{
        return this.httpClient.delete<number>(this.appURL+"/"+id);    
    }
}