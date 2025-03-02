import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dynamic Style in Angular';
  color: string = 'cadetblue';
  fontSize: string = '40';
  headingSmall = '30px';
  headingBig = '80px';
  zoom = false;
}
