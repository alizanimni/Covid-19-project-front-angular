import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrntModrbidityAgeAndVaccinationComponent } from './recurrnt-modrbidity-age-and-vaccination.component';

describe('RecurrntModrbidityAgeAndVaccinationComponent', () => {
  let component: RecurrntModrbidityAgeAndVaccinationComponent;
  let fixture: ComponentFixture<RecurrntModrbidityAgeAndVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecurrntModrbidityAgeAndVaccinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecurrntModrbidityAgeAndVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
