import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetail4Component } from './employee-detail4.component';

describe('EmployeeDetail4Component', () => {
  let component: EmployeeDetail4Component;
  let fixture: ComponentFixture<EmployeeDetail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
