import { Component } from '@angular/core';
import {Employee} from '../model/employee.model';
import {EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css'],

  providers: [Employee,
             EmployeeService]

})

export class EmployeesComponent {

  employees: Employee[];
  anyEmployee:Employee;
  showdelete = false;

  constructor(private employee: Employee, private empService: EmployeeService) {

  console.log('Employees Component Loading...');
    this.empService.getEmployees().subscribe(employees => {
      this.employees= employees;
    console.log('Service Employee'+employees);
    });
  }

  getEmployee(id:string) {
    console.log('calling getEmployee '+id);
  this.empService.getEmployeeById(id).subscribe(someEmployee=> {
  this.anyEmployee=someEmployee;
    this.showdelete=true;

    console.log(this.anyEmployee);
  });
  }
}
