import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/tasks')
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
  @Get('/tasks/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTaskById(parseInt(id));
  }
  @Post('/tasks')
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }
  @Put('tasks')
  editTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
  }
  @Delete('tasks')
  deleteTask() {
    return this.taskService.deleteTask();
  }
  @Patch('tasks')
  updateStatusTask() {
    return this.taskService.updateTaskStatus();
  }
}
