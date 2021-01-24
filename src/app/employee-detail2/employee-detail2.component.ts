import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-detail2',
  templateUrl: './employee-detail2.component.html',
  styleUrls: ['./employee-detail2.component.css']
})
export class EmployeeDetail2Component implements OnInit {

  employeeForm :  FormGroup;

  constructor(public fb: FormBuilder) {
    this.CreateForm();
   }

   CreateForm(){
     this.employeeForm = this.fb.group({
       name: ['',Validators.required],
     })
   }

  ngOnInit(): void {
  }

}
