import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Employee } from '../model/employee.model';
import { Headers } from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {
    console.log('Employee Service Init');
  }
  getEmployees() {
    return this.http.get('http://localhost:8080/employees')
      .map(res => res.json());

  }

  saveEmployee(employee: Employee) {

    return this.http.post('http://localhost:8080/auemployee',
      JSON.stringify(employee),
      { headers: this.getHeaders() }
    ).map(emp => { console.log(emp) });

  }


  getEmployeeById(id: string) {
    return this.http.get('http://localhost:8080/employee/' + id)
      .map(res => res.json());

  }

  deleteEmployee(id: string) {
    return this.http.delete('http://localhost:8080/deleteemployee/' + id)
      .map(res => { console.log('Emplyee deleted Id =>' + id) });

  }

  private getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
