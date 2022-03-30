import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sunscreen-requirement-form',
  templateUrl: './sunscreen-requirement-form.component.html',
  styleUrls: ['./sunscreen-requirement-form.component.scss']
})
export class SunscreenRequirementFormComponent implements OnInit {

  constructor() { }

  sunscreenRequirementForm = new FormGroup({
    startTime: new FormControl(''),
    commuteType: new FormControl(''),
    startLocation: new FormControl(''),
    endLocation: new FormControl(''),
  })

  ngOnInit(): void {
  }

}
