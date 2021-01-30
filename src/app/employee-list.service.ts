import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forms, formsContent } from './forms.model';
@Injectable()
export class EmployeeListService {
 list$: Observable<any>;
 selectedEmployee: Forms;
 private _observer;
 constructor() {
 this.list$ = new Observable((observer) => {
 this._observer = observer;
 });
 }
 getList() {
 this._observer.next(formsContent);
 }
 updateEmployee(employee: Forms) {
 const oldEmployee = formsContent.find(e => e.your_name === employee.your_name);
 const newEmployee = Object.assign(oldEmployee, employee);
 this._observer.next(formsContent);
 }
}
