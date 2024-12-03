import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    const result = this.tasks.find(task => task.id === id);

    if (!result) {
      return new NotFoundException(`Task with id ${id} not found`)
    }

    return result
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task)
    return 'Actualizando una tarea';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }

  deleteTask() {
    return 'Borrando una tarea';
  }
}
