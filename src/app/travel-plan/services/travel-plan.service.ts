import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CommuteType, TravelPlan} from "../model/TravelPlan";

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {

  constructor() { }


  getTravelPlans(): Observable<Array<TravelPlan>> {
    // TODO mock
    return new Observable<Array<TravelPlan>>(subscriber => subscriber.next([
      {
        needSunscreen: true,
        commuteType: CommuteType.BIKE,
        endLocation: { lat: -33.2, lng: 22.2 },
        startLocation: { lat: -53.2, lng: 32.2 }
      },
      {
        needSunscreen: false,
        commuteType: CommuteType.WALK,
        endLocation: { lat: -31.2, lng: 21.2 },
        startLocation: { lat: -43.2, lng: 12.2 }
      }
    ]))
  }
}
