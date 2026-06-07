import { Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService){}
  @Get()
  getTasks(){
    return this._taskService.getTasks()
  }
  @Get(":id")
  getTaskDetail(@Param("id") id :string){
    console.log("param is",id)
    return this._taskService.getTasks()
  }
}
