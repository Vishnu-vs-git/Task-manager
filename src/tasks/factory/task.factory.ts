import { Task } from "generated/prisma/browser";
import { TaskEntity } from "../entities/task.entity";
import { TaskStatus } from "../enums/task-status.enum";

export class TaskFactory{
  static toEntity(task: Task):TaskEntity{
    return new TaskEntity({
      id: task.id,
      title: task.title,
      description: task.description ?? undefined,
      status:task.status as TaskStatus,
      userId: task.userId,
      createdAt:task.createdAt,
      updatedAt:task.updatedAt
    })
  }
  static toEntityList(tasks:Task[]):TaskEntity[]{
    return tasks.map((t) => this.toEntity(t))
  }
}