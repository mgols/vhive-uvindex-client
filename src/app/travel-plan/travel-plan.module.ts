import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunscreenRequirementFormComponent } from './components/sunscreen-requirement-form/sunscreen-requirement-form.component';



@NgModule({
  declarations: [
    SunscreenRequirementFormComponent
  ],
  exports: [
    SunscreenRequirementFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelPlanModule { }
