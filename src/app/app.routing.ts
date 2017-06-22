import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AddEmployeeComponent } from './components/addemployee/addemployee.component';
import {EmployeesComponent} from './components/employeesdirectory/employees.component';

const appRoutes: Routes=[
  {
    path:'',
    component:AddEmployeeComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
