import { Task } from "../entities/task.entity";

export interface ITaskRepository {
  findAll():Promise<Task>
}