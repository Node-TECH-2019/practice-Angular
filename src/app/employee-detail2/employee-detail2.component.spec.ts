import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail2Component } from './employee-detail2.component';

describe('EmployeeDetail2Component', () => {
  let component: EmployeeDetail2Component;
  let fixture: ComponentFixture<EmployeeDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
