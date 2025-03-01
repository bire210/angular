import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'What is two way binding';
  name: string = 'Ravi';
}

/*
-- what is two way binding
--make input field for two way binding
--import formModudle
-- apply ngModel


*/
