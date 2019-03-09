import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
