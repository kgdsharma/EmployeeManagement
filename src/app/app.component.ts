import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-add-employee></app-add-employee>',

})
export class AppComponent {
  name:string;
  title = 'app';
  constructor() {
  this.name='krishna';
  console.log('AppComponent Loading...');
  }
}
