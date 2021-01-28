import { Component, OnInit } from '@angular/core';
import { contact_types } from '../forms.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-detail3',
  templateUrl: './employee-detail3.component.html',
  styleUrls: ['./employee-detail3.component.css']
})
export class EmployeeDetail3Component implements OnInit {

  employeeForm: FormGroup;
  contact_types = contact_types;
  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      your_name: ['', Validators.required ],
      furigana: ['', Validators.required ],
      email: ['', Validators.required ],
      email_check: ['', Validators.required ],
      contact_type: [this.contact_types[1], Validators.required ],
      subject: ['', Validators.required ],
      comment: ['', Validators.required ],
      companyname: '',
      tel: ''
    });
  }

  ngOnInit(): void {
  }

}
