import { Injectable } from '@nestjs/common';
import { ITaskRepository } from '../interface/tasks.repository.interface';
 import {  TaskEntity } from '../entities/task.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskFactory } from '../factory/task.factory';


@Injectable()
export class TaskRepository implements ITaskRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async findAll(): Promise<TaskEntity[]> {
    const tasks = await this._prisma.task.findMany();
    return TaskFactory.toEntityList(tasks)
  }
  async findById(id:string):Promise<TaskEntity|null> {
      const task = await this._prisma.task.findUnique({
        where:{
          id
        }
      })
      if(!task){
        return null;
      }
     return  TaskFactory.toEntity(task)
  }
  async updateById(id:string,payload: Partial<TaskEntity>):Promise<TaskEntity>{
     const updated = await this._prisma.task.update({
      where:{
        id
      },
      data:payload
     })
     return  TaskFactory.toEntity(updated);
  }
  async createTask(task:TaskEntity):Promise<TaskEntity>{
     const  created = await this._prisma.task.create({data:task});
     return TaskFactory.toEntity(created);
  }
}
