import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Directive in Angular';
  show = true;

  title1: string = '*ngFor Dirctive in Angular';
  studentNames: string[] = [
    'Amit Kumar',
    'Rohan Sharma',
    'Priya Verma',
    'Neha Singh',
    'Vikas Yadav',
    'Suman Gupta',
    'Anjali Mehta',
    'Rahul Chauhan',
    'Kiran Das',
    'Pooja Rani',
    'Suresh Patel',
    'Deepak Joshi',
    'Manish Thakur',
    'Sunita Mishra',
    'Rajesh Pandey',
  ];

  studentDetails: {
    name: string;
    age: number;
    city: string;
    mobile: string;
  }[] = [
    { name: 'Amit Kumar', age: 20, city: 'Delhi', mobile: '9876543210' },
    { name: 'Rohan Sharma', age: 21, city: 'Mumbai', mobile: '8765432109' },
    { name: 'Priya Verma', age: 19, city: 'Kolkata', mobile: '7654321098' },
    { name: 'Neha Singh', age: 22, city: 'Bangalore', mobile: '6543210987' },
    { name: 'Vikas Yadav', age: 20, city: 'Hyderabad', mobile: '5432109876' },
    // { name: 'Suman Gupta', age: 21, city: 'Chennai', mobile: '4321098765' },
    // { name: 'Anjali Mehta', age: 23, city: 'Pune', mobile: '3210987654' },
    // { name: 'Rahul Chauhan', age: 20, city: 'Ahmedabad', mobile: '2109876543' },
    // { name: 'Kiran Das', age: 22, city: 'Jaipur', mobile: '1098765432' },
    // { name: 'Pooja Rani', age: 19, city: 'Lucknow', mobile: '9988776655' },
    // { name: 'Suresh Patel', age: 24, city: 'Bhopal', mobile: '8877665544' },
    // { name: 'Deepak Joshi', age: 21, city: 'Chandigarh', mobile: '7766554433' },
    // { name: 'Manish Thakur', age: 23, city: 'Indore', mobile: '6655443322' },
    // { name: 'Sunita Mishra', age: 20, city: 'Patna', mobile: '5544332211' },
    // { name: 'Rajesh Pandey', age: 22, city: 'Ranchi', mobile: '4433221100' },
  ];

  title2: string = '*ngIf directive in angular';
  x = 5;

  login: boolean = false;

  block: number = 0;
}

/*
-- Directive is a class that adds additional behaviour to elements in our application.
-- A feature in anglar that  helps us to provide more power  to DOM elements.
-- If -else constion
-- For loop 
-- Add Style
-- ngIf ,ngFor, ngStyle,  ngSwitch, ngClass

--Types of directives

1. components directives
 -- The most common type of directive, Used in Component template file 
2. Structral Directives 
 --  Change the structue of the DOM by adding, removing , or manipulating  elements.

3. Attributes Directives
-- Modify the appearance or behiour of an existing element.

*/
