import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePatientsAgeAndVaccinationGraphComponent } from './active-patients-age-and-vaccination-graph.component';

describe('ActivePatientsAgeAndVaccinationGraphComponent', () => {
  let component: ActivePatientsAgeAndVaccinationGraphComponent;
  let fixture: ComponentFixture<ActivePatientsAgeAndVaccinationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivePatientsAgeAndVaccinationGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivePatientsAgeAndVaccinationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
