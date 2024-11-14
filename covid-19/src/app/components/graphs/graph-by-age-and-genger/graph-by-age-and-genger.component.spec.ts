import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphByAgeAndGengerComponent } from './graph-by-age-and-genger.component';

describe('GraphByAgeAndGengerComponent', () => {
  let component: GraphByAgeAndGengerComponent;
  let fixture: ComponentFixture<GraphByAgeAndGengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphByAgeAndGengerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphByAgeAndGengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
