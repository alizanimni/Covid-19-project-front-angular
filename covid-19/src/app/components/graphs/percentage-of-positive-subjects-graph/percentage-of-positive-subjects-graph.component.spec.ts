import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfPositiveSubjectsGraphComponent } from './percentage-of-positive-subjects-graph.component';

describe('PercentageOfPositiveSubjectsGraphComponent', () => {
  let component: PercentageOfPositiveSubjectsGraphComponent;
  let fixture: ComponentFixture<PercentageOfPositiveSubjectsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PercentageOfPositiveSubjectsGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageOfPositiveSubjectsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
