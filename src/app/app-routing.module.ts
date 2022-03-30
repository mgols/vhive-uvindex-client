import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TravelPlanComponent} from "./travel-plan/travel-plan.component";

const routes: Routes = [
  { path: '', component: TravelPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
