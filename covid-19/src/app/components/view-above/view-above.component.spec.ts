import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboveComponent } from './view-above.component';

describe('ViewAboveComponent', () => {
  let component: ViewAboveComponent;
  let fixture: ComponentFixture<ViewAboveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAboveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
