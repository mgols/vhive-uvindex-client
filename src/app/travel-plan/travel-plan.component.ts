import { Component, OnInit } from '@angular/core';
import {TravelPlanService} from "./services/travel-plan.service";
import {TravelPlan} from "./model/TravelPlan";

@Component({
  selector: 'app-travel-plan',
  templateUrl: './travel-plan.component.html',
  styleUrls: ['./travel-plan.component.scss']
})
export class TravelPlanComponent implements OnInit {

  constructor(private travelPlanService: TravelPlanService) { }

  public travelPlans: Array<TravelPlan> = []

  ngOnInit(): void {
    this.fetchAllPlans()
  }

  fetchAllPlans(): void {
    this.travelPlanService.getTravelPlans().subscribe(travelPlans => this.travelPlans = travelPlans)
  }

}
