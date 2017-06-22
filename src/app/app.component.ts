import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',

})
export class AppComponent {
  name:string;
  title = 'app';
  constructor() {
  this.name='krishna';
  console.log('AppComponent Loading...');
  }
}
