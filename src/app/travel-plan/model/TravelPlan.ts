
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
