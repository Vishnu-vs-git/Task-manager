import { Injectable } from '@nestjs/common';
import { ITaskRepository } from '../interface/tasks.repository.interface';
 import {  TaskEntity } from '../entities/task.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from 'generated/prisma/client';


@Injectable()
export class TaskRepository implements ITaskRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async findAll(): Promise<TaskEntity[]> {
    const tasks = await this._prisma.task.findMany();
    return tasks.map(
      (task: Task  ) =>
        new TaskEntity({
          id: task.id,
          title: task.title,
          description: task.description?? undefined,
          status: task.status as TaskStatus,
          userId: task.userId,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
        }),
    );
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
     return new TaskEntity({
       id: task.id,
          title: task.title,
          description: task.description?? undefined,
          status: task.status as TaskStatus,
          userId: task.userId,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
     })
  }
  async updateById(id:string,payload: Partial<TaskEntity>):Promise<TaskEntity>{
     const updated = await this._prisma.task.update({
      where:{
        id
      },
      data:payload
     })
     return new TaskEntity({
    id: updated.id,
    title: updated.title,
    description: updated.description ?? undefined,
    status: updated.status as TaskStatus,
    userId: updated.userId,
    createdAt: updated.createdAt,
    updatedAt: updated.updatedAt,
     })
  }
}
