import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail3Component } from './employee-detail3.component';

describe('EmployeeDetail3Component', () => {
  let component: EmployeeDetail3Component;
  let fixture: ComponentFixture<EmployeeDetail3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
