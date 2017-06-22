import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/addemployee/addemployee.component';
import {EmployeesComponent} from './components/employeesdirectory/employees.component';
import {routing} from './app.routing';
//  import {Employee} from './components/model/employee.model';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
