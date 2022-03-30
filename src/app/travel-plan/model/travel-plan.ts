import {FormControl, FormGroup} from "@angular/forms";

export interface TravelPlan {
  needSunscreen: boolean,
  commuteType: CommuteType,
  startLocation: Coordinates,
  endLocation: Coordinates
}

export enum CommuteType {
  WALK,
  BIKE
}

export interface Coordinates {
  lat: number,
  lng: number
}

export interface SunscreenRequirementRequest {
  startTime: Date
  commuteType: string
  startLocation: Coordinates
  endLocation: Coordinates
}
