import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5TableComponent } from './section5-table.component';

describe('Section5TableComponent', () => {
  let component: Section5TableComponent;
  let fixture: ComponentFixture<Section5TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Section5TableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section5TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
