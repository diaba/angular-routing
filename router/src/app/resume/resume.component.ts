import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOBS } from './jobs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  
  // show resume content by identifier
  jobIndex: string| null = '';  // Union type
  name: string| null = '';
// store job details with the template
  job:any ;

  //let's make the URL routes available to the class component
  constructor(private route: ActivatedRoute) {}

// called when the initial call is made
  ngOnInit(): void {
  this.route.paramMap.subscribe(param => {// deal with the id parameter
    console.log(param.get('id'));
    this.jobIndex = param.get('id');

    // find by index
    this.job = JOBS.find(j => {
        const paramId:string = param.get('id') || '';
        return j.id === parseInt(paramId)
      });

    
  });
this.route.queryParams.subscribe(params =>{
  // console.log(params['name']);
  this.name = params['name']
});
    
  }

}
