import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail5Component } from './employee-detail5.component';

describe('EmployeeDetail5Component', () => {
  let component: EmployeeDetail5Component;
  let fixture: ComponentFixture<EmployeeDetail5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
