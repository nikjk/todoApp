import { Component, OnInit } from '@angular/core';

export interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    {task: 'Walk the dog', completed: false},
    {task: 'Go to the market', completed: true},
    {task: 'Study Angular', completed: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(index: number): void {
    this.todoList[index].completed = true;
  }

  addTask(task: string): void {
    this.todoList.push({task: task, completed: false});
  }

  allTasksCompleted(): boolean {
  return this.todoList.every(todo => todo.completed);
}

removeTask(index: number): void {
  this.todoList.splice(index, 1);
}

filter = '';

filterTasks(): Todo[] {
  return this.todoList.filter(todo => todo.task.includes(this.filter));
}

// Modify the Todo interface:


// Add a method to start editing:
startEditing(index: number): void {
  this.todoList[index].editing = true;
}

// Add a method to end editing:
endEditing(index: number): void {
  this.todoList[index].editing = false;
}


}
export interface Todo {
  task: string;
  completed: boolean;
  editing?: boolean;
}