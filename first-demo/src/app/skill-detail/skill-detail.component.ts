import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {

  skillList: Skill[] = [];

  constructor() { 
    console.log("Skiil Detail Component Object Created...");
  }

  ngOnInit() {
    console.log("Skiil Detail Component Initialized...");
    let skill1 = new Skill();
    skill1.type = 'Language';
    skill1.skillSet = ["C","C++","Java","Java Script","Type Script"];

    let skill2 = new Skill();
    skill2.type = 'Database';
    skill2.skillSet = ["MySql","Oracle","Sql Server"];

    let skill3 = new Skill();
    skill3.type = 'OS';
    skill3.skillSet = ["Windows","Linux"];

    let skill4 = new Skill();
    skill4.type = 'Tools';
    skill4.skillSet = ["Eclipse","VS Code","MS Office"];

    this.skillList.push(skill1);
    this.skillList.push(skill2);
    this.skillList.push(skill3);
    this.skillList.push(skill4);
  }

}
