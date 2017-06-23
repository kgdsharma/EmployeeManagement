import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Employee} from '../model/employee.model';
import {Headers} from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {
    console.log('Employee Service Init');
  }
  getEmployees() {
    return this.http.get('http://localhost:8080/employees')
      .map(res=>res.json());

  }

  saveEmployee(employee:Employee) {
    console.log('in Save Employee');
    console.log(employee);
    console.log(JSON.stringify(employee));
    return this.http.post('http://localhost:8080/auemployee',
      JSON.stringify(employee),
      {headers:this.getHeaders()}
    ).map(emp=> {console.log(emp)});

  }


  getEmployeeById(id:string) {
      return this.http.get('http://localhost:8080/employees/'+id)
      .map(res=>res.json());

  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
