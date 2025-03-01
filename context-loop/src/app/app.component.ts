import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'For loop Contextual Variables';
  users: string[] = [
    'Birendra',
    'Arya',
    'Priyanka',
    'Sakchi',
    'Jaya',
    'Rakhi',
    'Punam',
    'Doli',
    'Punam',
    'Manisha',
    'Sunder',
    'Suresh',
  ];
  user: string[] = [];
}

/*
contextual variable- variables that are available in for loop.
*/
