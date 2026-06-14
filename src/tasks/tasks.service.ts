import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY } from './interface/repository.token';
import type { ITaskRepository } from './interface/tasks.repository.interface';
import { TaskNotFoundError } from './errors/task-not-found.error';
import { TaskResponseDTO } from './dto/task-response.dto';
import { TaskMapper } from './mappers/task.mapper';
import { ITaskService } from './interface/tasks.service.interface';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService implements ITaskService{
  constructor(
    @Inject(TASK_REPOSITORY) private readonly _taskRepo: ITaskRepository,
  ) {}
  async getTasks():Promise<TaskResponseDTO[]|[]> {
    const tasks = await this._taskRepo.findAll();
     if(tasks.length ===0){
       return []
     }
    return TaskMapper.toResponseDTOList(tasks)
  }
  async getTaskById(taskId: string): Promise<TaskResponseDTO>{
    
    const task = await this._taskRepo.findById(taskId);

    if(!task){
      throw new TaskNotFoundError(taskId);
    }

    return TaskMapper.toResponseDTO(task)
  }
  async updateTask(taskId:string,data:UpdateTaskDTO):Promise<TaskResponseDTO>{
      
    const  updated = await this._taskRepo.updateById(taskId,data);
    if(!updated){
     throw new TaskNotFoundError(taskId)
    }
      return  TaskMapper.toResponseDTO(updated)
  }
  async createTask(dto:CreateTaskDTO):Promise<TaskResponseDTO>{
      const created = await this._taskRepo.
  }
}
