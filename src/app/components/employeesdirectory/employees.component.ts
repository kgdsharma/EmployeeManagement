import { Component } from '@angular/core';
import {Employee} from '../model/employee.model';
import {EmployeeService} from '../services/employee.service';
import {Router, ActivatedRoute} from '@angular/router';


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
  deletedEmployee: Employee;
  showdelete = false;
  index: number;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private employee: Employee, private empService: EmployeeService) {

  console.log('Employees Component Loading...');
    this.empService.getEmployees().subscribe(employees => {
      this.employees= employees;
    console.log('Service Employee'+employees);
    });
  }

  getEmployee(id:string, index:number) {
    this.index=index;
    console.log('calling getEmployee '+id);
    console.log('calling getEmployee index'+index);
  this.empService.getEmployeeById(id).subscribe(someEmployee=> {
  this.anyEmployee=someEmployee;
    this.showdelete=true;

    console.log(this.anyEmployee);
  });
  }

  deleteEmployee(id:string) {

      console.log('calling delete Employee in component '+ id);
  this.empService.deleteEmployee(id).subscribe(data=> {
    this.showdelete=false;
    this.employees.splice(this.index,1);
  });
  }
}
