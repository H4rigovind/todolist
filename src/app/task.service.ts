import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private key = 'tasks';
  private tasks = JSON.parse(localStorage.getItem(this.key) || '[]');

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({ id: Date.now(), title, completed: false });
    this.save();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((t: { id: number; }) => t.id !== id);
    this.save();
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t: { id: number; }) => t.id === id);
    if (task) task.completed = !task.completed;
    this.save();
  }

  private save() {
    localStorage.setItem(this.key, JSON.stringify(this.tasks));
  }
}
