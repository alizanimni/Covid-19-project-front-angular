import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativelyVaccinatedComponent } from './cumulatively-vaccinated.component';

describe('CumulativelyVaccinatedComponent', () => {
  let component: CumulativelyVaccinatedComponent;
  let fixture: ComponentFixture<CumulativelyVaccinatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CumulativelyVaccinatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CumulativelyVaccinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
