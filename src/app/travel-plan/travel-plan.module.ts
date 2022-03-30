import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunscreenRequirementFormComponent } from './components/sunscreen-requirement-form/sunscreen-requirement-form.component';
import { TravelPlanMapComponent } from './components/travel-plan-map/travel-plan-map.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../shared/material/material.module";



@NgModule({
  declarations: [
    SunscreenRequirementFormComponent,
    TravelPlanMapComponent
  ],
  exports: [
    SunscreenRequirementFormComponent,
    TravelPlanMapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class TravelPlanModule { }
