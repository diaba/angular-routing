import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EarlyLifeComponent } from './early-life/early-life.component';
import { CareerComponent } from './career/career.component';


@NgModule({
  declarations: [
    AppComponent,
    EarlyLifeComponent,
    CareerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
