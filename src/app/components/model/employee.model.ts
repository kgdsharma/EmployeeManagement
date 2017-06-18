import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

export class Address {
  street: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
 country: string;
}

@Injectable()
export class Employee {
  name: String;
  email: String;
  phone: string;
  address: Address;
  constructor(private address1: Address) {
    this.address=address1;
  }
}


