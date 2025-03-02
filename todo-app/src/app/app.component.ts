import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo App in Angular';
  task: string = '';
  taskList: { id: number; title: string }[] = [];

  addNewTaks() {
    this.task &&
      this.taskList.push({
        title: this.task,
        id: (this.taskList[this.taskList.length - 1]?.id || 0) + 1,
      });
    console.log('&&&', this.taskList[this.taskList.length - 1].id);
    this.task = '';
  }
  inputHandle(event: Event) {
    this.task = (event.target as HTMLInputElement).value;
  }

  onDelete(id: number) {
    console.log(id, '888888888888', this.taskList);
    this.taskList = this.taskList.filter((task) => id != task.id);
  }
}
