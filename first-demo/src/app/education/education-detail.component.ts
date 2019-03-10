import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
    selector : 'app-education-detail',
    templateUrl : './education-detail.component.html'
})
export class EducationDetailComponent implements OnInit{

    educationDetailList: Education[] = [];

    constructor(){}

    ngOnInit(){
        let education1 = new Education(2001,"SSE",72.14,"GSEB");
        let education2 = new Education(2003,"HSE",66.50,"GHSEB");
        let education3 = new Education();
        education3.year = 2007;
        education3.degree = "B Tech";
        education3.per = 60.59;
        education3.university = "VNSGU";
        let education4 = new Education(2009,"M Tech",65.00,"SPU");
        this.educationDetailList.push(education1);
        this.educationDetailList.push(education2);
        this.educationDetailList.push(education3);
        this.educationDetailList.push(education4);

    }
}