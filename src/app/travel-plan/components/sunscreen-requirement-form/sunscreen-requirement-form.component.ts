import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommuteType, SunscreenRequirementRequest} from "../../model/travel-plan";

@Component({
  selector: 'app-sunscreen-requirement-form',
  templateUrl: './sunscreen-requirement-form.component.html',
  styleUrls: ['./sunscreen-requirement-form.component.scss']
})
export class SunscreenRequirementFormComponent implements OnInit {

  constructor() { }

  @Output()
  checkSunscreenRequirement = new EventEmitter<SunscreenRequirementRequest>()

  public commuteTypes = CommuteType

  sunscreenRequirementForm = new FormGroup({
    startTime: new FormControl(''),
    commuteType: new FormControl(''),
    startLocation: new FormGroup({
      lat: new FormControl(''),
      lng: new FormControl('')
    }),
    endLocation: new FormGroup({
      lat: new FormControl(''),
      lng: new FormControl('')
    }),
  })

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.sunscreenRequirementForm.value)
  }

}
