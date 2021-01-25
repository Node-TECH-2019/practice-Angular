import { Component, Input, Output, EventEmitter, ɵɵNgOnChangesFeature} from '@angular/core';
import { EmployeeModel, contact_types } from './employee-list.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel, contact_types } from './employee.model';



@Component({
  selector: 'app-employee-detail5',
  templateUrl: './employee-detail5.component.html',
})
export class EmployeeDetail5Component {
  @Input() employee: EmployeeModel;
  employeeForm: FormGroup;
  contact_types = contact_types;

  constructor(public fb: FormBuilder, public employeeListService: EmployeeListService) {
    this.createForm();
   }

   createForm() {
     this.employeeForm = this.fb.group({
       id: '',
       name: ['', Validators.required],
       phone: ['', Validators.required],
       department: [this.contact_types[0], Validators.required],
       email: ''
     });

     ngOnChanges(){
       this.employeeForm.reset(
         this.employee
       );
     }

     save(event){
       event.preventDefault();
       this.employeeListService.updateEmployee(this.employeeForm.value);
     }
   }

  ngOnInit(): void {
  }

}
