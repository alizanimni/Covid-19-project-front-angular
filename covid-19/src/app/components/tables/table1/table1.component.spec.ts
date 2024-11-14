import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table1Component } from './table1.component';

describe('Table1Component', () => {
  let component: Table1Component;
  let fixture: ComponentFixture<Table1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Table1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
