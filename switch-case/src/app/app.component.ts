import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '*ngSwitch Directive in Angular';
  color: string = 'yellow';

  changeColor(color: string) {
    this.color = color;
  }
}

/**
 *
 *
 * what is ngSwitch case-It is a structure directive
 * Example of conditions with ngSwitchcase
 * example of ngSwitch case with button click
 * default case
 */
