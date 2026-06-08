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
}
