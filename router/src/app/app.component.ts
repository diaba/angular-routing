import { Component } from '@angular/core';
import { JOBS } from './resume/jobs';
//share info with Jobs data

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // jobs loaded
 jobs =  JOBS;
}
