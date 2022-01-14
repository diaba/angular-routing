import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';
import { Routes } from '@angular/router';
import { EarlyLifeComponent } from './early-life/early-life.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
    {
        // when the user goes to http://localhost:4200/about 
        path:'about',
        component: AboutComponent,
        // when the user goes to http://localhost:4200/about/early-life display early-life component
         children: [
           {
             path:'early-life',
           component: EarlyLifeComponent
           },
           {
             path:'career',
             component: CareerComponent
           },
           
         ]
      },
      {
           // when the user goes to http://localhost:4200/links 
        path:'links',
        component: LinksComponent
      },
      {
           // when the user goes to http://localhost:4200/resume/id
        path:'resume/:id', // : show a dyn value
        component: ResumeComponent
      }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

// Need a class to export the module
export class AppRoutingModule {}