import { TaskEntity } from '../entities/task.entity';

export interface ITaskRepository {
  findAll(): Promise<TaskEntity[]>;
  findById(id:string):Promise<TaskEntity|null>;
  updateById(id:string,payload: Partial<TaskEntity>):Promise<TaskEntity>;
  createTask(task:TaskEntity):Promise<TaskEntity>
}
