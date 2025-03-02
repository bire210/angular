import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo Task';
  task: string = '';
  taskList: { id: number; title: string }[] = [];

  addTask() {
    console.log('task', this.task);
    this.task &&
      this.taskList.push({
        title: this.task,
        id: (this.taskList[this.taskList.length - 1]?.id || 0) + 1,
      });
    this.task = '';
  }

  onDelete(id: number) {
    this.taskList = this.taskList.filter((task) => id != task.id);
  }
}
