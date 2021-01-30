import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../../employee-list.service';
import { Observable} from 'rxjs';
import { Forms } from '../../forms.model'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<any>;
  selectedEmployee: Forms;
  constructor(public EmployeeListService: EmployeeListService) {
    this.employees = this.EmployeeListService.list$;
   }

   getEmployees() {
     this.EmployeeListService.getList();
   }
   select(employee) {
     this.selectedEmployee = employee;
   }

  ngOnInit(): void {
  }

}
