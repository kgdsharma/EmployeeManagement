import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: 'addemployee.component.html',
  styleUrls: ['addemployee.component.css'],

  providers: [Employee,
    EmployeeService]

})
export class AddEmployeeComponent {



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public employee: Employee, private empService: EmployeeService) {  }

  addEmployee() {

    console.log('Calling addEmployee of AddEmployeeComponent');
    this.empService.saveEmployee(this.employee).subscribe(data => {
      this.router.navigate(['/employees']);
    });
  }

}
