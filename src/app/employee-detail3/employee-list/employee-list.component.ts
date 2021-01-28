import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from './service';
import { Observable} from 'rxjs';
import { Forms } from '../../forms.model'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
