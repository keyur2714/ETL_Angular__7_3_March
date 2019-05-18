import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';
import { ManageStudentComponent } from './manage-student/manage-student.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private loggingService : LoggingService){
     this.loggingService.logInfo("App Module Object Created...!") ;
  }
}
