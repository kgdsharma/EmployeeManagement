import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css'],

  providers: [Employee,
    EmployeeService]

})

export class EmployeesComponent {

  employees: Employee[];
  anyEmployee: Employee;
  employeeEdit: Employee;
  deletedEmployee: Employee;
  showdelete = false;
  showEdit = false;
  index: number;

  constructor(private employee: Employee, private empService: EmployeeService) {

    console.log('Employees Component Loading.');
    this.empService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log('Service Employee' + employees);
    });
  }

  getEmployee(id: string, index: number) {
    this.index = index;
    console.log('calling getEmployee ' + id);

    this.empService.getEmployeeById(id).subscribe(someEmployee => {
      this.anyEmployee = someEmployee;
      this.showdelete = true;

      console.log(this.anyEmployee);
    });
  }

  deleteEmployee(id: string) {

    console.log('calling delete Employee in component ' + id);
    this.empService.deleteEmployee(id).subscribe(data => {
      this.showdelete = false;
      this.employees.splice(this.index, 1);
    });
  }

  close() {
    this.showdelete = false;
    this.showEdit = false;
  }


  showEmployeeInEditMode(id: string) {
    this.showdelete = false;
    // this.index=index;
    console.log('calling getEmployee ' + id);
    this.empService.getEmployeeById(id).subscribe(someEmployee => {
      this.employeeEdit = someEmployee;
      this.showEdit = true;

      console.log(this.employeeEdit);
    });
  }


  updateEmployee() {

    console.log('in update EMPLOYEE');
    this.empService.saveEmployee(this.employeeEdit).subscribe(data => {
      // this.router.navigate(['/employees']);
      this.employees.splice(this.index, 1, this.employeeEdit);
      this.showEdit = false;
    });
  }
}
