import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

import type { ITaskService } from './interface/tasks.service.interface';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(@Inject("TASK_SERVICE")private readonly _taskService: ITaskService) {}
  @Get()
  async getTasks() {
    return this._taskService.getTasks();
  }
  @Get(':id')
  async getTaskDetail(@Param('id') id: string) {
    
    return this._taskService.getTaskById(id);
  }
  @Post() 
  async createTask(@Body() createTaskDto:CreateTaskDTO){
    return this._taskService.
  }
}
