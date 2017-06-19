import { Component } from '@angular/core';
import {Employee} from '../model/employee.model';
import {EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: 'addemployee.component.html',
  styleUrls: ['addemployee.component.css'],

  providers: [Employee,
             EmployeeService]

})
export class AddEmployeeComponent {

  employee1:Employee[];
  // employeeService:EmployeeService;

  constructor(private employee: Employee, private empService: EmployeeService) {
    // this.employeeService=empService;
    console.log('Add Employee Loading...');
    this.empService.getEmployees().subscribe(employees => {
      this.employee= employees[0];
    console.log('Service Employee'+employees);
    });

    // this.employee=this.employee1[0];
  }

  addEmployee() {

    console.log('in AddEMPLOYEE');
    this.empService.saveEmployee(this.employee).subscribe(employee=> {
    console.log(employee);
    });
  }

}
