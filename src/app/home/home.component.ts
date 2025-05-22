import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newTask: string = '';
  tasks: {
title: any;
    id: any;
    name: string;
    completed: boolean;
  }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
      this.tasks = this.taskService.getTasks();
    }
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
    this.tasks = this.taskService.getTasks();
  }
} 