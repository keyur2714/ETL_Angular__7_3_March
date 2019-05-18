import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceAndDIDemo';
  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("AppComponent Object Created...!");
  }
}
