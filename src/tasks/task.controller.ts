import { Controller, Delete, Get, Module, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/tasks')
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
  @Post('/tasks')
  createTask() {
    return 'Creando una tarea'
  }
  @Put('/tasks')
  editTask() {
    return 'Editando una tarea'
  }
  @Delete('/tasks')
  deleteTask() {
    return 'Eliminando una tarea'
  }
  @Patch('/tasks')
  updateStatusTask() {
    return 'Editando estado de una tarea'
  }
}