import { TaskEntity } from '../entities/task.entity';

export interface ITaskRepository {
  findAll(): Promise<TaskEntity[]>;
}
