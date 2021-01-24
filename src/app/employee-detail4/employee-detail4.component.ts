import { Forms, contact_types } from '../forms.model' ;
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-detail4',
  templateUrl: './employee-detail4.component.html',
  styleUrls: ['./employee-detail4.component.css']
})
export class EmployeeDetail4Component implements OnInit {

  @Input() employee: Forms;
  employeeForm: FormGroup;
  contact_types = contact_types;

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.employeeForm = this.fb.group({
      id: '',
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      contact_types: [this.contact_types[0], Validators.required ],
      email: ''
    });
  }
  ngOnChanges() {
    this.employeeForm.reset(
    this.employee
    );
  }

  ngOnInit(): void {
  }

}
