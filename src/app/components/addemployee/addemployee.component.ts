import { Component } from '@angular/core';
import {Employee} from '../model/employee.model';
import {Address} from '../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: 'addemployee.component.html',
  styleUrls: ['addemployee.component.css'],

  providers: [Employee,
            Address]

})
export class AddEmployeeComponent {

  constructor(private employee: Employee) {
    console.log('Add Employee Loading...');
  }

}
