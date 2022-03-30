import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunscreenRequirementFormComponent } from './sunscreen-requirement-form.component';

describe('SunscreenRequirementFormComponent', () => {
  let component: SunscreenRequirementFormComponent;
  let fixture: ComponentFixture<SunscreenRequirementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunscreenRequirementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunscreenRequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
