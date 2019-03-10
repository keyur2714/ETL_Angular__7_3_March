import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { EducationDetailComponent } from './education/education-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalDetailsComponent,
    SkillDetailComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
