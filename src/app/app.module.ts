import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelPlanComponent } from './travel-plan/travel-plan.component';
import {TravelPlanModule} from "./travel-plan/travel-plan.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    TravelPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TravelPlanModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
